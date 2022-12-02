const Room = require('./Rooms');
const RoomIo = require('./RoomIo');

function InitRooms(cnf, io, socket_keys){

	let rooms = {};

	let room = io? new RoomIo(io, new Room('_'), socket_keys): new Room('_');

	function init(cnf, parent){

		for(let i in cnf){
			let data 	= cnf[i];
			let id 		= parent? `${parent.id}.${i}`: i;
			let info 	= data.info || {name: data.name || data};
			let room 	= new Room(id, info);
			if(io)
				room = new RoomIo(io, room, socket_keys);
			rooms[id] 	= room;
			if(data.childs)
				init(data.childs, room);
			if(parent)
				parent.addRoom(room);

			console.log(room.info);
		}

	}init(cnf, room);

	return Object.freeze({
		room, rooms
	});

}

module.exports = InitRooms;