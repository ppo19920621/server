// redis 封装模块

const redis = require('redis');
const config = require('../config');

const REDIS_CONFIG = config.REDIS_CONFIG;


// 用promise封装成同步
function callRedis(func_name, args){
	return new Promise((resolve, reject) => {
		const client = redis.createClient(REDIS_CONFIG);
		client[func_name](...args, (err, res) => {
			if(err) 
				reject(err);
			else 
				resolve(res);
			client.quit();
		});
	});
}

// 重载到另外一个对象上,输出
const Redis = {}
for(let k in redis.RedisClient.prototype){
	Redis[k] = function(){
		return callRedis(k, Array.prototype.slice.call(arguments));
	}
}

module.exports = Redis;
