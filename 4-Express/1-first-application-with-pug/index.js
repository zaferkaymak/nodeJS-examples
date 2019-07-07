const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/',(req,res) => {
    const userInfo= {
        name: 'Murat',
        surname: 'Kadife',
        friends: ['Zafer Kaymak', 'Murat Ali', 'Tuğrul Çelik']
    }
    res.render('index', userInfo);
});

app.get('/about',(req,res) => {
    res.render('about');
});
app.get('/contact',(req,res) => {
    res.render('contact');
});

const listenPort = 3000;
app.listen(listenPort);
console.log(`Connected on localhost:${listenPort}`);
