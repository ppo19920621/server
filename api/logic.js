// 逻辑模块
const db = require('../db/index');
const utils = require('./utils');
const md5 = require('md5');


module.exports = {
	
	// User
	async _genUserId(){
		let query = { 'type':db.IdCursor.TYPE_UID,}
		let update = { '$inc':{ 'value':1}}
		let options = { 'new':true}
		let res = await db.IdCursor.findAndModify(query, [], update, options);
		if(res.value === null){
			let doc = {
				'type':db.IdCursor.TYPE_UID,
				'value':db.IdCursor.VALUE_ID,
			}
			let r = await db.IdCursor.insertOne(doc);
			return r['value']
		}
		return res.value['value']
	},

	async signUp(account, pwd){
		let list = await db.User.find({'account':account});
		if(list.length) return utils.reqDict(-2,'has this account');
		let uid = await this._genUserId();
		let doc = {
			'uid':uid,
			'account':account,
			'pwd':md5(pwd),
			'reg_time':new Date().getTime(),
		}
		let res = await db.User.insertOne(doc);
		delete res['_id'];
		delete res['pwd'];
		return utils.reqDict(0,'',{'info':res});
	},

	async login(account, pwd){
		let list = await db.User.find({'account':account});
		if(!list.length) return utils.reqDict(-2, 'no has this account');
		let info = list[0];
		if(info.pwd !== md5(pwd)) 
			return utils.reqDict(-3, 'pwd error');

		delete info['_id'];
		delete info['pwd'];
		return utils.reqDict(0, '', {'info':info});

	}

}

