const mongo = require('../api/mongo');

const data = {}

{ //test
	let dd = {
		table_name:'test',
		db_fidles:[
			'id',
			'name',
			'age'
		],
		db_consts:{
			'type':1
		},
		db_index:[
			{
				'key':{'id':1},
				'unique':true
			},
			{
				'key':{'age':-1},
				'unique':false
			}
		],
	}
	let Test = new mongo(dd);
	data['Test'] = Test
}

module.exports = data
