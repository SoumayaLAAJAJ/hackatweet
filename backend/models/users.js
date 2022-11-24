const mongoose = require("mongoose");
require("../models/connection");

const userSchema = mongoose.Schema({
    firstname: String,
    username: String,
    password: String,
    token: String,
    avatar: String
});

const User = mongoose.model('users', userSchema);

module.exports = User;
