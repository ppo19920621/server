// 逻辑模块
const db = require('../db/index');
const utils = require('./utils');
const md5 = require('md5');

async function _genUserId(){
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
}

function filterUser(user){
	delete user['_id'];
	delete user['pwd'];
	return user;
}

exports.signUp = async function(account, pwd){
	let list = await db.User.find({'account':account});
	if(list.length) return utils.reqDict(-2,'has this account');
	let uid = await _genUserId();
	let doc = {
		'uid':uid,
		'account':account,
		'pwd':md5(pwd),
		'reg_time':new Date().getTime(),
	}
	let info = await db.User.insertOne(doc);
	info = filterUser(info)
	return utils.reqDict(0,'',{'info':info});
}

exports.login = async function(account, pwd){
	let list = await db.User.find({'account':account});
	if(!list.length) return utils.reqDict(-2, 'no has this account');
	let info = list[0];
	if(info.pwd !== md5(pwd)) 
		return utils.reqDict(-3, 'pwd error');

	info = filterUser(info)
	return utils.reqDict(0, '', {'info':info});
}

exports.getUser = async function(uid){
	let info = await db.User.find({'uid':uid})[0];
	if(!info) return {};
	info = filterUser(info);
	return info;
}


