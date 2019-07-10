const loginRoute = require('./routers/loginRoute');
const userRoute = require('./routers/userRoute');
const aboutRoute = require('./routers/aboutRoute');
module.exports = (app) => {
    app.use('/login',loginRoute);
    app.use('/user',userRoute);
    app.use('/about',aboutRoute);
    app.use((err, req, res, next) => {
        res.status(err.status);
        res.render('error', {
            message: err.message,
            status: err.status
        });
    });
}