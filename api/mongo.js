const mongodb = require('mongodb');
const utils = require('./utils');
const mongodb_config = require('../config/index').mongodb_config;

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://'+mongodb_config.url+':27017/';
const db_name = mongodb_config.db;

class TableDefine{
	constructor({table_name, db_fidles=[], db_consts={}, db_index=[]}={}){
		// inito
		if(!table_name) throw new Error('no table name');
		this.client = null;
		this.table_name = table_name;
		if(db_fidles){
			for(let key of db_fidles){
				this[key] = key
			}
		}
		if(db_consts){
			for(let key in db_consts){
				this[key] = db_consts[key]
			}
		}

		this.db_index = db_index;
		
	}

	async call_mongo(func_name, args){
		let _this = this;	
		this.client = await MongoClient.connect(url);
		if(utils.checkError(this.client)) throw this.client;
		console.log('mongodb connect');
		let db = this.client.db(db_name);
		try{
			let t1 = new Date().getTime();
			var res = db.collection(_this.table_name)[func_name](...args);
			let t2 = new Date().getTime();
			console.log('[MONGO] call_mongo time:%s collection:%s ,function:%s ,args:%s', t2-t1, _this.table_name, func_name, JSON.stringify(args));
		}catch(e){
			console.error(e);
			console.error('call_mongo failed collection:%s ,function:%s ,args:%s ',_this.table_name, func_name, JSON.stringify(args));
		}
		return res;
	}
	
	async find(query={}, {sort=null, skip=null, limit=null, project=null}={}){
		let args = [query];
		let res = await this.call_mongo('find', args);
		if(utils.checkError(res)) throw res;
		if(sort) res = res.sort(sort);
		if(skip) res = res.skip(skip);
		if(limit) res = res.limit(limit);
		if(project) res = res.project(project);
		let list = await res.toArray();
		if(utils.checkError(list)) throw list;
		
		this.client.close();
		return list;
	}

	async count(query={}){
		let args = [query];
		let res = await this.call_mongo('count', args);
		if(utils.checkError(res)) throw res;
		this.client.close();
		return res
	}

	async insertOne(ducoment={}){
		let args = [ducoment];
		let res = await this.call_mongo('insertOne', args);
		if(utils.checkError(res)) throw res;
		this.client.close();
		return res.ops[0]
	}

	async insertMany(ducoments=[]){
		let args = [ducoments];
		let res = await this.call_mongo('insertMany', args);
		if(utils.checkError(res)) throw res;
		this.client.close();
		return res.ops
	}

	async updateOne(query={}, update={}, upsert=false){
		let args = [query, update, {multi:true,upsert:upsert}]
		let res = await this.call_mongo('updateOne', args);
		if(utils.checkError(res)) throw res;
		this.client.close();
		return res.result
	}

	async updateMany(query={}, update={}, upsert=false){
		let args = [query, update, {multi:false,upsert:upsert}]
		let res = await this.call_mongo('updateMany', args);
		if(utils.checkError(res)) throw res;
		this.client.close();
		return res.result
	}

	async deleteOne(query={}){
		let args = [query]
		let res = await this.call_mongo('deleteOne', args);
		if(utils.checkError(res)) throw res;
		this.client.close();
		return res.result
	}

	async deleteMany(query={}){
		let args = [query]
		let res = await this.call_mongo('deleteMany', args);
		if(utils.checkError(res)) throw res;
		this.client.close();
		return res.result
	}

	async aggregate(pipeline){
		let args = [pipeline]
		let res = await this.call_mongo('aggregate', args);
		if(utils.checkError(res)) throw res;
		let list = await res.toArray();
		if(utils.checkError(list)) throw list;
		this.client.close();
		return list
	}

	async createIndex(){
		for(let dd of this.db_index){
			let args = [dd['key'],{'unique':dd['unique']}]
			let res = await this.call_mongo('createIndex', args);
			if(utils.checkError(res)) throw res;
			console.log(res)
			this.client.close();
		}	
		return 0;
	}
}


module.exports = TableDefine
