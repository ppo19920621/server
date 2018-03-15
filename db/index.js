// 数据表结构模块 定义数据表的名字，字段，属性和索引
const mongo = require('../api/mongo');

const MODEL = {};

{ //IdCursor
	let data = {
		table_name:'id_cursor',
		db_fidles:[
			'type',	
			'value',
		],
		db_consts:{
			'TYPE_UID':'type_uid',
			'VALUE_ID':10000,
		},
		db_index:[
			{
				'key':{'type':1},
				'unique':true
			},
		]
	}
	MODEL['IdCursor'] = new mongo(data);
}

{ //user
	let data = {
		table_name:'user',
		db_fidles:[
			'uid',		//uid
			'account',	//帐号名
			'pwd',		//密码 md5加密

			'reg_time',	//注册时间
			'nickname',	//昵称
			'sex',		//性别
			'age',		//年龄
		],
		db_consts:{
			'SEX_MALE':1,	//男
			'SEX_FEMALE':2,	//女
		},
		db_index:[
			{
				'key':{'uid':1},
				'unique':true
			},
			{
				'key':{'age':-1},
				'unique':false
			},
		]
	}
	MODEL['User'] = new mongo(data);
}

module.exports = MODEL;
