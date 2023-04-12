const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    author: String,
    password: String

});

module.exports = mongoose.model('Login', LoginSchema);
