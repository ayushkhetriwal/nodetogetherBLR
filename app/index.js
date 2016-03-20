var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send("Output");
});

app.get('/*', function(request, response) {
  response.send("Output!!!");
});


module.exports = app;





