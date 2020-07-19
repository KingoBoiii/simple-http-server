const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    console.log(`Request made! Url: ${req.url}`);
    switch(req.url) {
        case '/': res.end('Index Page'); break;
        case '/about': res.end('About Page'); break;
        case '/contact': res.end('Contact Page'); break;
        default: res.end('404 - Page not found'); break;
    }
});

server.listen(3000, 'localhost', function(err) { 
    if(err) {
        return console.log(`Error: ${err}`);
    }

    const host = server.address().address;
    const port = server.address().port;
    console.log('Server started and listening for requests on http://%s:%s', host, port); 
});