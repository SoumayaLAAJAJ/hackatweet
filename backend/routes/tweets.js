var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets');
const User = require('../models/users');

// ROUTE POUR CREER UN TWEET
router.post('/addTweet', (req, res) => {
    const date = new Date();
    User.findOne({username: req.body.username}).then(data => {
        // const pattern = /#.*/i ;
        // const verifHashtag = req.body.text.match(pattern);
        if(data){
            
            const newTweet = new Tweet({
                date: date,
                message: req.body.message,
                hashtag: req.body.hashtag.split(','),
                isLiked: false,
                user: data._id,
                
    
            });
            newTweet.save().then(newDoc => {
                res.json({tweet: newDoc});
            });
        }
        

        
    });

});

// ROUTE POUR RECUPERER TOUS LES TWEETS
router.get("/", (req, res) => {
    Tweet.find().then(data => {
        res.json({data: data});
    });
});


// ROUTE POUR SUPPRIMER LE TWEET
router.delete('/deleteTweet/:_id', (req, res) => {
    Tweet.deleteOne({_id: req.params._id}).then(data => {
        if(data.deletedCount > 0){
            Tweet.find().then(upData => {
                res.json({result:  true, tweets: upData});
            });
        }else{
            res.json({result:  false, error: 'Tweet not found'});
        }
    });
});


module.exports = router;