//server.js

//Declare variable
var http    = require('http');
var app     = require('./app')

//Create server
/**
 * use app.js and port 8000
*/
http.createServer(app.handleRequest).listen(8000);