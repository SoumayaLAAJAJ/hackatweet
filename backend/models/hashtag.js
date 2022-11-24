const mongoose = require("mongoose");
require("../models/connection");

const hashtagSchema = mongoose.Schema({
    name: String,
});

const Hashtag = mongoose.model('hashtags', hashtagSchema);

module.exports = Hashtag;