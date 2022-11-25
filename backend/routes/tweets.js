var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets');
const User = require('../models/users');
const Hashtag = require('../models/tweets');

router.post('/addTweet', (req, res) => {
    const date = new Date();
    User.findOne({token: req.body.token}).then(user => {
        console.log(user)
        const pattern = /^#/gi ;
        const verifHashtag = req.body.text.match(pattern);
        console.log(verifHashtag);
        
            const newTweet = new Tweet({
                date: date,
                text: req.body.text,
                user: user._id,
                hashtag: verifHashtag,
                

            });

            newTweet.save().then(newDoc => {
                res.json({tweet: newDoc});
            });
        
    })


})


module.exports = router;