const http = require('http');

const httpServer = http.createServer((request,response) => {
    console.log('Send a request');
    response.writeHead(200,{'content-type': 'text/html charset=utf-8'});
    if(request.method === 'GET'){
        switch(request.url){
            case '/':
                response.write('Index Page');
                break;
            case '/contact':
                response.write('Contact Page');
                break;
            case '/about':
                response.write('About Page');
                break;
            default:
                response.write('Not Found this Page');
        }
    }
    response.end();
});


const listenPort = 3000;
httpServer.listen(listenPort);
console.log(`Connected on localhost:${listenPort}`);