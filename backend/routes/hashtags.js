var express = require('express');
var router = express.Router();

require('../models/connection');
const Hashtag = require('../models/hashtag');


// GET # dans trends
router.get('/hash', (req, res) => {
 Hashtag.find().then(data => {
    if (data.length!=0) {
        res.json({ result: true, hash: data});
      } else {
        res.json({ result: false, error: 'No # in bdd' });
      }
 })
})

module.exports = router;