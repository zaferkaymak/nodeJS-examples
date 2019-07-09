const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect('mongodb+srv://movie-user:asd123@cluster0-pby7z.mongodb.net/jwt-token?retryWrites=true&w=majority', {useNewUrlParser: true});
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);

    mongoose.connection.on('open', () => {
        console.log('MongoDB connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('Connection Error: ' , err);
    });

    mongoose.Promise = global.Promise;
}
