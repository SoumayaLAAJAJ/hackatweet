const mongoose = require("mongoose");
require("../models/connection");

const tweetSchema = mongoose.Schema({
    date: Date,
    message: String,
    hashtag: [String],
    isLiked: Boolean,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;