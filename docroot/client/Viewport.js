/**
 * Created by JetBrains WebStorm.
 * User: mschwartz
 * Date: 12/26/11
 * Time: 8:57 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.onReady(function() {
    var items = [];
   	for (var i in Schemas) {
   		var schema = Schemas[i];
   		items.push({
   			xtype: 'schemagrid',
   			title: i,
   			schema: schema,
   			method: 'list'+i
   		});
   	}

   	new Ext.container.Viewport({
   		layout: 'fit',
   		items: [
   			{
   				xtype: 'tabpanel',
   				activeTab: 0,
   				items: items
   			}
   		]
   	});
});