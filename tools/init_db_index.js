// 脚本文件，用来创建数据表的索引
const db = require('../db/index');

async function main(){
	for(let key in db){
		if(!db[key]) continue;
		console.log(key,db[key].db_index);
		let res = await db[key].createIndex();
		console.log(res);
	}
	console.log('end');
}

main();
