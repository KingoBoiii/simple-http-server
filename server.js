const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
    console.log('Request made!');
});

server.listen(3000, function(err) { 
    if(err) {
        return console.log(`Error: ${err}`);
    }
    console.log('Server started, and listening for requests on port: 3000'); 
});