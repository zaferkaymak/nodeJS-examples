const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect('mongodb+srv://movie-user:asd123@cluster0-pby7z.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
    
    mongoose.connection.on('open', () => {
        console.log('MongoDB connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('Connection Error: ' , err);
    });

    mongoose.Promise = global.Promise;
}
