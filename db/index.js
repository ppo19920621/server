var mongo = require('../api/mongo');

var data = {}
{ //test
	let table = 'test';
	let db_fidles = [
		'name',
		'age',
	];
	let Test = new mongo(table, db_fidles);
	data['Test'] = Test
}

module.exports = data
