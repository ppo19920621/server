// redis 封装模块
<<<<<<< 093b64e940598ae6566016d2d996bb6a1868db60
// 返回值是promise
// 用await let red = await cache.set('test', 'test');
// 用promise cache.get('test').then(res => { console.log(res)})
=======
>>>>>>> 封装redis模块

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
