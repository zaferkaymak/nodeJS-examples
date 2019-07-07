const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.get('/',(req,res) => {
    res.render('index');
});

const listenPort = 3000;
app.listen(listenPort);
console.log(`Connected on localhost:${listenPort}`);
