var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello ....test!');
})

var server = app.listen(3000);


var movementnames = [
  { name: "a" },
  { name: "b" }
]

app.get('/api/movementnames', function (req, res) {
  res.json(movementnames);
});
