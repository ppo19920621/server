// mongo.js mongodb操作的封装模块
const mongodb = require('mongodb');
const utils = require('./utils');
const config = require('../config/index');

const mongoClient = mongodb.MongoClient;
const URL = 'mongodb://'+config.MONGODB_CONFIG.url+':27017/';
const DB_NAME = config.MONGODB_CONFIG.db;

class TableDefine{
	constructor({table_name, db_fidles=[], db_consts={}, db_index=[]}={}){
		// init
		if(!table_name) throw new Error('no table name');
		this.client = null;
		this.table_name = table_name;
		if(db_fidles){
			for(let key of db_fidles){
				this[key] = key;
			}
		}
		if(db_consts){
			for(let key in db_consts){
				this[key] = db_consts[key];
			}
		}

		this.db_index = db_index;
		
	}

	async callMongo(func_name, args){
		this.client = await mongoClient.connect(URL);
		if(utils.checkError(this.client)) throw this.client;
		console.log('mongodb connect');
		let db = this.client.db(DB_NAME);
		let res = null;
		try{
			let t1 = new Date().getTime();
			res = db.collection(this.table_name)[func_name](...args);
			let t2 = new Date().getTime();
			console.log('[MONGO] callMongo time:%s collection:%s ,function:%s ,args:%s', t2-t1, this.table_name, func_name, JSON.stringify(args));
		}catch(e){
			console.error(e);
			console.error('callMongo failed collection:%s ,function:%s ,args:%s ',this.table_name, func_name, JSON.stringify(args));
		}
		return res;
	}
	
	async find(query={}, options={}){
		let args = [query, options];
		let res = await this.callMongo('find', args);
		if(utils.checkError(res)) throw res;

		let list = await res.toArray();
		if(utils.checkError(list)) throw list;
		
		this.client.close();
		return list;
	}

	async findAndModify(query={}, sort=[], update={}, options={}){
		let args = [query, sort, update, options];
		let res = await this.callMongo('findAndModify', args);
		if(utils.checkError(res)) throw res;
		this.client.close();
		return res;
	}

	async count(query={}, options={}){
		let args = [query, options];
		let res = await this.callMongo('count', args);
		if(utils.checkError(res)) throw res;
		this.client.close();
		return res;
	}

	async insertOne(ducoment={}, options={}){
		let args = [ducoment, options];
		let res = await this.callMongo('insertOne', args);
		if(utils.checkError(res)) throw res;
		this.client.close();
		return res.ops[0];
	}

	async insertMany(ducoments=[], options={}){
		let args = [ducoments, options];
		let res = await this.callMongo('insertMany', args);
		if(utils.checkError(res)) throw res;
		this.client.close();
		return res.ops;
	}

	async updateOne(query={}, update={}, options={}){
		let args = [query, update, options];
		let res = await this.callMongo('updateOne', args);
		if(utils.checkError(res)) throw res;
		this.client.close();
		return res.result;
	}

	async updateMany(query={}, update={}, options={}){
		let args = [query, update, options];
		let res = await this.callMongo('updateMany', args);
		if(utils.checkError(res)) throw res;
		this.client.close();
		return res.result;
	}

	async deleteOne(query={}, options={}){
		let args = [query, options];
		let res = await this.callMongo('deleteOne', args);
		if(utils.checkError(res)) throw res;
		this.client.close();
		return res.result;
	}

	async deleteMany(query={}, options={}){
		let args = [query, options];
		let res = await this.callMongo('deleteMany', args);
		if(utils.checkError(res)) throw res;
		this.client.close();
		return res.result;
	}

	async aggregate(pipeline={}, options={}){
		let args = [pipeline, options];
		let res = await this.callMongo('aggregate', args);
		if(utils.checkError(res)) throw res;
		let list = await res.toArray();
		if(utils.checkError(list)) throw list;
		this.client.close();
		return list;
	}

	async createIndex(){
		for(let dd of this.db_index){
			let args = [dd['key'],{'unique':dd['unique']}];
			let res = await this.callMongo('createIndex', args);
			if(utils.checkError(res)) throw res;
			console.log(res);
			this.client.close();
		}	
		return 0;
	}
}


module.exports = {
	TableDefine
}
