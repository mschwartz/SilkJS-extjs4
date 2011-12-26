/**
 * Created by JetBrains WebStorm.
 * User: mschwartz
 * Date: 12/26/11
 * Time: 8:32 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('Ext.ux.SchemaGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.schemagrid',
    initComponent: function() {
        var me = this,
                schema = me.initialConfig.schema,
                fields = schema.fields,
                id = Ext.id();

        var store = Ext.data.Store.create({
            autoLoad: true,
            root: 'list',
            totalProperty: 'count',
            idProperty: schema.primaryKey,
            proxy: {
                type: 'ajax',
                url: '/Server',
                reader: {
                    type: 'json',
                    root: 'list',
                    totalProperty: 'count'
                },
                extraParams: {
                    method: me.initialConfig.method
                },
                actionMethods: {
                    create: 'POST',
                    read: 'POST',
                    update: 'POST',
                    destroy: 'POST'
                }
            },
            fields: fields,
            listeners: {
                load: function() {
                    me.updateToolbar();
                }
            }
        });
        var sm = Ext.create('Ext.selection.RowModel', {
            listeners: {
                select: function() {
                    console.log('select');
                    me.updateToolbar();
                },
                deselect: function() {
                    console.log('deselect');
                    me.updateToolbar();
                }
            }
        });
        var columns = [],
                fieldHash = {};
        for (var i in fields) {
            var field = fields[i];
            fieldHash[field.name] = field;
            if (field.header && !field.serverOnly) {
                var flex = field.autoExpand ? 1 : 0;
                var column = {
                    header: field.header,
                    id: field.name,
                    format: field.format,
                    dataIndex: field.name
                };
                column.renderer = Ext.bind(me.renderField, column);
                if (field.autoExpand) {
                    column.flex = 1;
                }
                else if (field.width) {
                    column.width = field.width;
                }
                columns.push(column);
            }
        }
        console.dir(columns);
        var config = {
            selModel: sm,
            store: store,
            columns: columns,
            autoSizeColumns: true,
            autoFill: true,
            stripeRows: true,
            trackMouseOver: true,
            loadMask: true,
            buttonId: id
        };
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        me.tbar = new Ext.Toolbar({
            items: [
                {
                    text: 'Add',
                    id: 'add-'+id,
                    handler: function() {
                        me.editRecord({});
                    }
                },
                {
                    text: 'Edit',
                    id: 'edit-'+id,
                    handler: function() {
                        me.editRecord(me.getSelectionModel().getSelection()[0].data);
                    }
                },
                {
                    text: 'Delete',
                    id: 'delete-'+id,
                    handler: function() {
                        me.deleteRecords();
                    }
                }
            ]
        });
        me.bbar = new Ext.toolbar.Paging({
            store: store,
            pageSize: 25,
            displayInfo: true,
            displayMsg: 'Displaying ' + me.initialConfig.schema.name + '{0} - {1} of {2}',
            beforePageText: 'Page',
            emptyMsg: 'Nothing to Display'
        });
        me.callParent(arguments);
        me.fieldHash = fieldHash;
    },
    updateToolbar: function() {
        var me = this,
                id = this.buttonId;
        var selections = me.getSelectionModel().getSelection();
        if (selections.length) {
            Ext.getCmp('delete-'+id).enable();
            if (selections.length == 1) {
                Ext.getCmp('edit-'+id).enable();
            }
            else {
                Ext.getCmp('edit-'+id).disable();
            }
        }
        else {
            Ext.getCmp('delete-'+id).disable();
            Ext.getCmp('edit-'+id).disable();
        }
    },
    editRecord: function(record) {
        var me = this,
                id = Ext.id(),
                schema = me.initialConfig.schema,
                fields = schema.fields,
                primaryKey = schema.primaryKey;
        record = record || {};
        var items = [];
        for (i in fields) {
            var field = fields[i];
            if (field.header && field.editable) {
                items.push({
                    xtype: 'textfield',
                    fieldLabel: field.header,
                    anchor: '100%',
                    id: field.name + '-' + id,
                    name: field.name,
                    value: record[field.name]
                })
            }
        }
        var dialog = new Ext.Window({
            title: record[primaryKey] ? 'Edit Record' : 'Add Record',
            width: 640,
            height: 480,
            modal: true,
            layout: 'fit',
            items: [
                {
                    xtype: 'form',
                    frame: true,
                    labelWidth: 150,
                    items: items
                }
            ],
            buttonAlign: 'center',
            buttons: [
                {
                    text: 'OK',
                    handler: function() {
                        for (var i=0, len = items.length; i<len; i++) {
                            var cmp = Ext.getCmp(items[i].id);
                            if (cmp) {
                                record[items[i].name] = cmp.getValue();
                            }
                        }
                        Ext.Ajax.request({
                            url: '/Server',
                            params: {
                                method: 'editUser',
                                example: Ext.encode(record)
                            },
                            success: function(response) {
                                dialog.close();
                                me.store.load();
                            }
                        });
                    }
                },
                {
                    text: 'Cancel',
                    handler: function() {
                        dialog.close();
                    }
                }
            ]
        });
        dialog.show();
    },
    deleteRecords: function() {
        var me = this,
                records = me.getSelectionModel().getSelection(),
                len = records.length;
        var examples = [];
        for (var i=0; i<len; i++) {
            examples.push(records[i].data);
        }
        Ext.Ajax.request({
            url: '/Server',
            params: {
                method: 'deleteUsers',
                examples: Ext.encode(examples)
            },
            success: function(response) {
                me.store.load();
            }
        });
    },
    renderField: function(value, p, r) {
        var me = this,
                format = me.format;
        switch (format) {
            case 'DateTime':
                return Ext.Date.format(new Date(value*1000), 'm/d/Y h:i:s A');
            default:
                return value;
        }
    }
});
