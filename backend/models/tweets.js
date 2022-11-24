const mongoose = require("mongoose");
require("../models/connection");

const tweetSchema = mongoose.Schema({
    date: Date,
    text: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    hashtag: { type: mongoose.Schema.Types.ObjectId, ref: 'hashtags'}
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;