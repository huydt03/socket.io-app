const SOCKET_KEYS = {
	PLAYER: {
		UPDATE: 'player.update',
		OTHER_UPDATE: 'player.other_update',
	},
	ROOM: {
		UPDATE: 'room.update',
		OTHER_UPDATE: 'room.other_update',
		GET_ROOMS: 'room.get_rooms',
		GET_PLAYERS: 'room.get_players',
		ADD: 'room.add',
		REMOVE: 'room.remove',
		ENTER: 'room.enter',
		LEAVE: 'room.leave',
	},
	DISCONNECT: 'disconnect',
	OTHER_CONNECT: 'other_connect'
}

module.exports = SOCKET_KEYS;