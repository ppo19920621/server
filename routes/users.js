var express = require('express');
var router = express.Router();

var db = require('../db/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/find', function(req, res, next) {
	let data = {
		project:{_id:0}
	}	
	db.Test.find({},data).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/count', function(req, res, next) {
	db.Test.count({}).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/insertOne', function(req, res, next) {
	let document = {id:1,name:'111',age:11};
	db.Test.insertOne(document).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/insertMany', function(req, res, next) {
	let data = [
		{id:2,name:'222',age:22},
		{id:3,name:'333',age:22},
	]
	db.Test.insertMany(data).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/updateOne', function(req, res, next) {
	let query = {id:1};
	let update = {$set:{'ss':10}}
	db.Test.updateOne(query,update,true).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/updateMany', function(req, res, next) {
	let query = {age:22};
	let update = {$set:{'ss':22}}
	db.Test.updateMany(query,update,true).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/deleteOne', function(req, res, next) {
	let query = {id:1};
	db.Test.deleteOne(query).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/deleteMany', function(req, res, next) {
	let query = {age:22};
	db.Test.deleteMany(query).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/aggregate', function(req, res, next) {
	let aggregate = [
		{$group:{_id:'$age',num:{$sum:1}}}
	]
	db.Test.aggregate(aggregate).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

module.exports = router;
