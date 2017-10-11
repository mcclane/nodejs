var http = require('http')

server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('Hello World')
})
server.listen(3000)
