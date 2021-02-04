const http = require('http');

const server = http.createServer(((req, res) => {
    if (req.url === '/'){
        res.write('hello word');
        res.end();
    }
    if (req.url === '/api/viet'){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
}));

server.listen(3000);


