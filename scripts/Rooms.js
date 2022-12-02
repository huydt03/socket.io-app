const {Rooms: _Rooms} = require('@huy-tmp/rooms');

function Rooms(id, info, _info) {
	let self = new _Rooms(id, info, _info);
	return self;
}

module.exports = Rooms;