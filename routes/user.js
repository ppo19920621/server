// 子路由文件
const express = require('express');
const router = express.Router();

const db = require('../db/index');
const logic = require('../api/logic');
const utils = require('../api/utils');


/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(req.session);
	res.render('user',{});
});

router.post('/register', function(req, res, next) {
	console.log(req.session);
	let params = req.body;
	let account = params.account;
	let pwd = params.pwd;
	let re_pwd = params.re_pwd;

	if(pwd !== re_pwd){
		res.json(utils.reqDict(-1, '重复密码不对'));
		return false;
	}
	
	logic.signUp(account, pwd).then(r => {
		if(r.result === 0){
			req.session.user = r.info;
		}
		console.log(r);
		res.json(r);
	})
	.catch(e => {
		console.log(e);
		res.send(JSON.stringify(e));
	});

});

router.post('/login', function(req, res, next) {
	console.log(req.session);
	let params = req.body;
	let account = params.account;
	let pwd = params.pwd;
	
	logic.login(account, pwd).then(r => {
		if(r.result === 0){
			req.session.user = r.info;
		}
		console.log(r);
		res.json(r);
	})
	.catch(e => {
		console.log('error');
		console.log(e);
		res.send(JSON.stringify(e));
	});

});

router.get('/get_user_info', function(req, res, next) {
	console.log(req.session);
	let info = req.session.user;
	console.log(info)
	if(info){
		res.json(utils.reqDict(0, '', {'info':info}));
	}else{
		res.json(utils.reqDict(-2,'没登录'))
	}
});

router.get('/layout', function(req, res, next) {
	console.log(req.session);
	delete req.session.user;

	res.json(utils.reqDict());
});


// test
router.get('/find', function(req, res, next) {
	let options = {
		sort:[['uid',1]],
		projection:{_id:0}
	};	
	db.User.find({}, options).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e);
	});
});

router.get('/count', function(req, res, next) {
	db.User.count({}).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/insertOne', function(req, res, next) {
	let document = {uid:1,name:'111',age:11};
	db.User.insertOne(document).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/insertMany', function(req, res, next) {
	let data = [
		{uid:2,name:'222',age:22},
		{uid:3,name:'333',age:22},
	]
	db.User.insertMany(data).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/updateOne', function(req, res, next) {
	let query = {uid:1};
	let update = {$set:{'ss':10}}
	db.User.updateOne(query,update,true).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/updateMany', function(req, res, next) {
	let query = {age:22};
	let update = {$set:{'ss':22}}
	db.User.updateMany(query,update,true).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/deleteOne', function(req, res, next) {
	let query = {uid:1};
	db.User.deleteOne(query).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/deleteMany', function(req, res, next) {
	let query = {age:22};
	db.User.deleteMany(query).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/aggregate', function(req, res, next) {
	let aggregate = [
		{$group:{_id:'$age',num:{$sum:1}}}
	]
	db.User.aggregate(aggregate).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

module.exports = router;
