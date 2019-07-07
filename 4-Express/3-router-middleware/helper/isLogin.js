const isLogin = (req,res,next) => {
    const isLogin = false;
    if(isLogin)
        next();
    else
        res.send('Please Login');
}
module.exports = isLogin;