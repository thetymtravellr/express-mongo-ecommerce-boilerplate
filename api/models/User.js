const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    country: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 14
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    isAdmin: Boolean
});

const User = mongoose.model('User', userSchema);

module.exports = User;