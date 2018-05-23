var express = require('express');
var router = express.Router();
var Trail = require('../models').Trail;

// GET trail listings
router.get('/', function(req, res) {
  Trail.all()
    .then( function(trail) {
      return res.render('trail', { trail: trail});
    })
});

// POST add trail listing
router.post('/', function(req, res) {
  var title = req.body.title;
  Trail.create({ title: title})
    .then( function() {
      res.redirect('/trail');
    })
})

module.exports = router;