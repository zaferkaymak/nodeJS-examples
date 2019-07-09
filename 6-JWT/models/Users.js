var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});

module.exports = mongoose.model('users', userSchema);

