//server.js

//Declare variable
var http = require('http');
var app = require('./app');
var exp = require('./exp');

//Some function
//Request function and response
function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(exp.myVar);
    exp.myFunction();
    response.end();
}

//Create server
//using port 8000
http.createServer(onRequest).listen(8000);