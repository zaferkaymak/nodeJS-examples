const express = require('express'); 
const app = express();

require('./router')(app);

const listenPort = 3000;
app.listen(listenPort);
console.log(`Connected on localhost:${listenPort}`);