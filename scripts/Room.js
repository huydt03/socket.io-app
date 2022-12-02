const {Room: _Room} = require('@huy-tmp/rooms');

function Room(id, info, _info) {
	let self = new _Room(id, info, _info);
	return self;
}

module.exports = Room;