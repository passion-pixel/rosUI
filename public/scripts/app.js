const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))



//Socket io DOCS source
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});


// end
app.listen(3000, () => console.log('Example app listening on port 3000!'))
