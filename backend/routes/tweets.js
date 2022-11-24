var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets');
const User = require('../models/users');
const Hashtag = require('../models/tweets');

router.post('/addTweet', (req, res) => {
    const date = new Date(now);
    User.findOne({token: req.body.token}).then(user => {
        const pattern = /^#/gi ;

        
            const newTweet = new Tweet({
                date: date,
                text: req.body.text,
                user: user._id,
                hashtag: req.body.text.match(pattern),
                

            });

            newTweet.save().then(newDoc => {
                res.json({tweet: newDoc});
            });
        
    })


})


module.exports = router;