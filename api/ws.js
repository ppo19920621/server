// socket.io 封装模块 实现websocket
// 目前还没有用户验证，准备先把websocket实现，然后修改整个项目改成用token验证

const socket_io = require('socket.io');

let SocketIo = {};
//房间列表 roomid - set[name, ...] 
let RoomInfo = {};

SocketIo.getSocketIo = function(server){
	let io = socket_io.listen(server);
	
	io.set('log level', 1);
	io.on('connection', socket => {
		//通知客户端链接成功
		socket.emit('open');

		let roomid = null;
		let name = null;

		//加入房间
		socket.on('join', data => {
			name = data.name;
			roomid = data.roomid;
			console.log(name + ' join room:'+ roomid);

			if(!RoomInfo[roomid]){
				RoomInfo[roomid] = new Set();
			}
			RoomInfo[roomid].add(name);

			let users = [...RoomInfo[roomid]];

			//socket 加入房间
			socket.join(roomid);
			//通知自己名称和其他用户列表
			socket.emit('roominfo', {name:name, users:users});
			//通知房间其他人
			io.to(roomid).emit('join', {name:name});
		});
		
		//离开房间
		socket.on('leave',() => {
			console.log(name + ' leave room:'+ roomid);
			if(roomid){
				RoomInfo[roomid].delete(name);
				socket.leave(roomid);
				io.to(roomid).emit('leave', {name:name});
				roomid = null;
			}
		});

		//监听退出事件
		socket.on('disconnect',() => {
			console.log(name + ' disconnect');	
			if(roomid){
				RoomInfo[roomid].delete(name);
				socket.leave(roomid);
				io.to(roomid).emit('leave', {name:name});
				roomid = null;
			}
		});


		//用户信息
		socket.on('message',msg => {
			console.log(name + 'send msg:' + msg);
			//不在房间
			if(!RoomInfo[roomid].has(name)){
				return false;
			}

			io.to(roomid).emit('msg', {name:name, msg:msg});
		});
	});
}

module.exports = SocketIo
