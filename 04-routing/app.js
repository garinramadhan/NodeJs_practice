//app.js

//Declare variable
var url     = require('url');
var fs      = require('fs');

//Some function
/**
 * Render html function
 */
function renderHtml(path, response) {
    fs.readFile(path, null, function(error, data){
        if(error){
            Response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

//Module for export
module.exports = {
    handleRequest: function(request, response) { //Function for handleRequest
        response.writeHead(200, {'Content-type': 'text:html'});

        var path = url.parse(request.url).pathname; //path, for setup path after url (e.g. localhost/path)
        switch (path) {
            case '/': //index route, use default url or '/' will go to index.html
                renderHtml('index.html', response);
                break;
            case '/login': //login route, use '/login' to access login page
                renderHtml('login.html', response);
                break;
            default: //default route, if route not listed user will redirect to not found page
                response.writeHead(404);
                response.write('Route not defined!');
                response.end();
        }
    }
}