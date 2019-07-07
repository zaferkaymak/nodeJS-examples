const express = require('express');
const router = express.Router();

router.get('/', (req,res, next) => {
    const user = false;
    if(user)
        res.send('User page');
    else 
        return next({status:404, message: 'User Not Found'});
});

module.exports = router;
