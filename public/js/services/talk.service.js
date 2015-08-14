app.factory('talk', function(Configuration, socket) {
    var talkService = {
        say : function(message) {
            socket.emit('message', message);
        },
        listen: function(callback) {
            socket.on('message', callback);
        }
    };

    return talkService;
});
