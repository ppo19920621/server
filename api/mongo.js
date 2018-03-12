var mongodb = require('mongodb');
var utils = require('./utils');
var MongoClient = mongodb.MongoClient;
var mongodb_config = require('../config/index').mongodb_config;
var url = 'mongodb://'+mongodb_config.url+':27017/';

class TableDefine{
	constructor(table_name){
		this.table_name = table_name
	}

	async call_mongo(func_name, args){
		let _this = this;	
		let client = await MongoClient.connect(url);
		if(utils.checkError(client)) throw client;
		console.log('mongodb connect');
		let db = client.db(mongodb_config.db);
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

		return list;
	}

	async count(query={}){
		let args = [query];
		let res = await this.call_mongo('count', args);
		if(utils.checkError(res)) throw res;
		return res
	}

	async insertOne(ducoment={}){
		let args = [ducoment];
		let res = await this.call_mongo('insertOne', args);
		if(utils.checkError(res)) throw res;
		return res.ops[0]
	}

	async insertMany(ducoments=[]){
		let args = [ducoments];
		let res = await this.call_mongo('insertMany', args);
		if(utils.checkError(res)) throw res;
		return res.ops
	}

	async updateOne(query={}, update={}, upsert=false){
		let args = [query, update, {multi:true,upsert:upsert}]
		let res = await this.call_mongo('updateOne', args);
		if(utils.checkError(res)) throw res;
		return res.result
	}

	async updateMany(query={}, update={}, upsert=false){
		let args = [query, update, {multi:false,upsert:upsert}]
		let res = await this.call_mongo('updateMany', args);
		if(utils.checkError(res)) throw res;
		return res.result
	}

	async deleteOne(query={}){
		let args = [query]
		let res = await this.call_mongo('deleteOne', args);
		if(utils.checkError(res)) throw res;
		return res.result
	}

	async deleteMany(query={}){
		let args = [query]
		let res = await this.call_mongo('deleteMany', args);
		if(utils.checkError(res)) throw res;
		return res.result
	}

	async aggregate(pipeline){
		let args = [pipeline]
		let res = await this.call_mongo('aggregate', args);
		if(utils.checkError(res)) throw res;
		let list = await res.toArray();
		if(utils.checkError(list)) throw list;
		return list
	}
}


module.exports = TableDefine
