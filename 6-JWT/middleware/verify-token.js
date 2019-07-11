const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    const token = req.headers['x-access-token'] || req.body.token || req.query.token;
    if(token){
        jwt.verify(token, req.app.get('api_secret_key'), (err, decoded) => {
            if(err) {
                res.status(500);
                res.json({
                    status:false,
                    message: 'Failed to authenticate token'
                });
            }else {
                req.decode = decoded;
                next();
            }
        });
    }else {
        res.status(500);
        res.json({
            status:false,
            message: 'Token is not defined'
        });
    }
}