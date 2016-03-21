// const port = process.env.PORT || '8080';
// const host = process.env.HOST || '0.0.0.0';
// const express = require('express');
// const app = express();

// appww.use(require('./app'));

// app.listen(port, host);

// console.log('Server running %s:%d...', host, port);

// module.exports = app;


var port = process.env.port || 3000;
var host = 'localhost';

var express = require('express');
var app = express();
var motivations = require('motivations');
var pickone = require('pick-one');

app.use(require('./app'));

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});


console.log("Server is listening ..... ");


