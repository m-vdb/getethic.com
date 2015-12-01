var http = require('http'),
    static = require('node-static');
const PORT = 8080;

// we want to server everything
var file = new static.Server('.');

http.createServer(function (request, response) {
    request.addListener('end', function () {
        // serve files
        file.serve(request, response);
    }).resume();
}).listen(PORT, '0.0.0.0', function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
