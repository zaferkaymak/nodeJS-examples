const express = require('express');
const router = express.Router();
const isLogin = require('../helper/isLogin');

router.get('/', isLogin, (req,res) => {
    res.send('Login page');
});

router.post('/user',(req,res) => {
    res.send('Login page with POST method');
});

module.exports = router;
