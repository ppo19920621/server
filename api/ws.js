// socket.io 封装模块 实现websocket

const socket_io = require('socket.io');

let SocketIo = {};

SocketIo.getSocketIo = function(server){
	let io = socket_io.listen(server);
	console.log('wsssss')
	console.log(server)
	
	io.set('log level', 1);
	io.on('connection', socket => {
		socket.emit('news', { hello:'world'});
		socket.on('my other event', data => {
			console.log(data);
		});
	});
}

module.exports = SocketIo
