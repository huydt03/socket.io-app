const {APP, SOCKET_KEYS, ROOMS} = require('./configs');
const {Player, Room, Rooms, RoomIo, InitRooms} = require('./scripts');

(()=>{

	const io = require('socket.io')(APP.port);

	const {room, rooms} = new InitRooms(ROOMS, io, SOCKET_KEYS);

	io.on('connect', socket=> {

		let player 		= new Player(socket.id);
		player.socket 	= socket;

		room.playerEnter(player);

	});

})();