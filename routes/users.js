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

	db.Test.insertOne({1:9,3:4}).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/insertMany', function(req, res, next) {
	let data = [
		{1:2,5:6},
		{2:6,3:7}
	]
	db.Test.insertMany(data).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/updateOne', function(req, res, next) {
	let query = {1:20};
	let update = {$set:{'ss':10}}
	db.Test.updateOne(query,update,true).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/updateMany', function(req, res, next) {
	let query = {1:2};
	let update = {$set:{'ss':2}}
	db.Test.updateMany(query,update,true).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/deleteOne', function(req, res, next) {
	let query = {1:20};
	db.Test.deleteOne(query).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/deleteMany', function(req, res, next) {
	let query = {1:2};
	db.Test.deleteMany(query).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

router.get('/aggregate', function(req, res, next) {
	let aggregate = [
		{$group:{_id:'$ss',num:{$sum:1}}}
	]
	db.Test.aggregate(aggregate).then((list) => {
		res.send(JSON.stringify(list));
	}).catch((e) => {
		res.send(e)	
	});
});

module.exports = router;
