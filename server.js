// const port = process.env.PORT || '8080';
// const host = process.env.HOST || '0.0.0.0';
// const express = require('express');
// const app = express();

// appww.use(require('./app'));

// app.listen(port, host);

// console.log('Server running %s:%d...', host, port);

// module.exports = app;


var port = "8080";
var host = process.env.HOST ;

var express = require('express');
var app = express();
var motivations = require('motivations');
var pickone = require('pick-one');

app.use(require('./app'));

app.listen(port,host);

console.log("Server is listening ..... ");


