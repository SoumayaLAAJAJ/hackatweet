var express = require('express');
var router = express.Router();

require('../models/connection');
const Hashtag = require('../models/hashtag');


// GET # dans trends
router.get('/hash', (req, res) => {
  Hashtag.find({ hash: req.params.hash}).then(data => {
    if (data) {
        res.json({ result: true, hash: data.name });
      } else {
        res.json({ result: false, error: 'No # in bdd' });
      }
})
})

module.exports = router;