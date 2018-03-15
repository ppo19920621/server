// utils.js 工具类函数模块

module.exports = {

	checkError(obj){
		if(obj.toString().search('Error') === -1){
			return false;
		}else{
			return true;
		}
	},

	reqDict(result=0, reason='', data={}){
		let req = {};
		req['result'] = result;
		req['reason'] = reason;
		if(data){
			for(let key in data){
				req[key] = data[key];
			}
		}
		return req;
	},
};
