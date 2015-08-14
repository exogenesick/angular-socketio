var io = require('socket.io')();
var port = 3000;

io.on('connection', function(socket){
  	console.log('New client connected');
  	socket.on('message', function(message) {
  		io.emit('message', message);
  	});
});

io.listen(port);
console.log('Socket server listening on port: ' + port);
