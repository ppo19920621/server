// utils.js 工具类函数模块


exports.checkError = function(obj){
	if(obj.toString().search('Error') === -1){
		return false;
	}else{
		return true;
	}
}

exports.reqDict = function(result=0, reason='', data={}){
	let req = {};
	req['result'] = result;
	req['reason'] = reason;
	if(data){
		for(let key in data){
			req[key] = data[key];
		}
	}
	return req;
}

exports.getUser = function(req){
	return req.session.user;
}

exports.setUser = function(req, user){
	req.session.user = 	user;
}

exports.delUser = function(req){
	delete req.session.user
}
