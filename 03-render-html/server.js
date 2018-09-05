//server.js

//Declare variable
var http = require('http');
var fs = require('fs');

//Some function
//Request function and response
function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'}); //Change 'text/plain' to 'text/html' for rendering html file
    fs.readFile('./index.html', null, function(error, data){
        if(error){
            Response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

//Create server
//using port 8000
http.createServer(onRequest).listen(8000);