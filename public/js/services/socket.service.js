app.factory('socket', function(Configuration) {
	var socket = io(Configuration.socketServer);

    return socket;
});
