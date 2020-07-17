var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\nThis page is currently running a server on the Mzamomtsha Website');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081');
