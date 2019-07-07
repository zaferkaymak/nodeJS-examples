const http = require('http');
const fs = require('fs');
const httpServer = http.createServer((request, response) => {
    console.log('Send a request');
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    // response.write('<b>Welcome</b> to the Home Page');
    // response.end();

    fs.readFile('index.html',(error,data) => {
        if(error)
            throw error;
        response.end(data);
    });
});

const listenPort = 3000;
httpServer.listen(listenPort);
console.log(`Connected on localhost:${listenPort}`);