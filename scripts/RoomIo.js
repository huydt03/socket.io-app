const _RoomIo = require('@huy-tmp/room-io');

function RoomIo(io, Room, socket_keys) {
	let self = new _RoomIo(io, Room, socket_keys);
	return self;
}

module.exports = RoomIo;