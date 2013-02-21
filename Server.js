/**
 * Created by JetBrains WebStorm.
 * User: mschwartz
 * Date: 12/26/11
 * Time: 8:25 AM
 * To change this template use File | Settings | File Templates.
 */

include('config.js');
var MySQL = require('MySQL').MySQL,
	Schema = require('Schema');

SQL = new MySQL();
SQL.connect();

Schema.add({
	name: 'Users',
	fields: [
		{ name: 'userId', type: 'int', autoIncrement: true, defaultValue: 0 },
		{ name: 'username', type: 'varchar', size: 64, header: 'User Name', width: 128, autoExpand: true, editable: true },
		{ name: 'password', type: 'varchar', size: 64, header: 'Password', serverOnly: true, editable: true },
		{ name: 'email', type: 'varchar', size: 128, header: 'E-Mail Address', width: 128, editable: true },
		{ name: 'phone', type: 'varchar', size: 128, header: 'Phone Number', width: 128, editable: true },
		{ name: 'mobile', type: 'varchar', size: 128, header: 'Mobile Number', width: 128, editable: true },
		{ name: 'created', type: 'int', defaultValue: function() { return parseInt(new Date().getTime() / 1000, 10); }, header: 'Created', width: 150, format: 'DateTime', editable: false }
	],
	primaryKey: 'userId',
	indexes: [
		'username',
		'email'
	]
});

SQL.close();
// delete SQL;

function Server_action() {
	switch (req.data.method) {
		case 'listUsers':
			Json.success(Schema.list('Users', {}, function(o) {
				o = Schema.clean('Users', o);
			}));
		case 'editUser':
			var example = Json.decode(req.data.example);
			example.userId = example.userId || 0;
			Schema.putOne('Users', example);
			Json.success();
		case 'deleteUsers':
			var examples = Json.decode(req.data.examples);
			forEach(examples, function(example) {
				Schema.remove('Users',example);
			});
			Json.success();
	}
}
