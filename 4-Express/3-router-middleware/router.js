const loginRoute = require('./routers/loginRoute');
const aboutRoute = require('./routers/aboutRoute');
module.exports = (app) => {
    app.use('/login',loginRoute);
    app.use('/about',aboutRoute);
}