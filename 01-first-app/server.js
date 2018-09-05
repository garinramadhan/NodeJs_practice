//server.js

//Declare variable
var http = require('http');

//Some function
//Request function and response
function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
}

//Create server
//using port 8000
http.createServer(onRequest).listen(8000);