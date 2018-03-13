// 数据表结构模块 定义数据表的名字，字段，属性和索引
const mongo = require('../api/mongo');

const MODEL = {};

{ //test
	let data = {
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
			},
		]
	}
	MODEL['Test'] = new mongo(data);
}

module.exports = MODEL;
