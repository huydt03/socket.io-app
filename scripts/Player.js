const {Player: _Player} = require('@huy-tmp/rooms');

function Player(id, info, _info) {
	let self = new _Player(id, info, _info);
	return self;
}

module.exports = Player;