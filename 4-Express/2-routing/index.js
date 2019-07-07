const express = require('express');
const app = express();


app.get('/',(req,res) => {
    res.send('Welcome to Main URL');
});

app.get('/users',(req,res) => {
    res.send('Users page');
});
app.post('/users',(req,res) => {
    res.send('You have connected on the Users page with the post method');
});
app.all('/users',(req,res) => {
    res.send('Users page');
});
app.get('/friends/:userID/:friendID?',(req,res) => {
    res.send(req.params);
});

const listenPort = 3000;
app.listen(listenPort);
console.log(`Connected on localhost:${listenPort}`);

