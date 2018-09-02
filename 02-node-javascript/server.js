var http = require('http');
var app = require('./app');
var exp = require('./exp');


function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(exp.myVar);
    exp.myFunction();
    response.end();
}

http.createServer(onRequest).listen(8000);