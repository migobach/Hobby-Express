var express = require('express');
var router = express.Router();
var Trail = require('../models').Trail;

router.get('/', function(req, res) {
  Trail.all(
    {
      order: [
        ['createdAt', 'ASC']
      ]
    }
  )
    .then( function(trail) {
      res.render('trail', { trail: trail})
    })
})

// GET trail listings
router.get('/', function(req, res) {
  Trail.all()
    .then( function(trail) {
      return res.render('trail', { trail: trail});
    })
});

//GET button
router.get('/:id/edit', function(req, res) {
  Trail.findById(req.params.id)
  .then(function(trail) {
    return res.render('edit', { trail: trail })
  })
})

// PUT trail
router.put('/:id', function(req, res) {
  Trail.update(
    { title: req.body.title },
    { where: { id: req.params.id } }
  )
  .then( function () {
    return res.redirect('/trail');
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

// DELETE trail
router.delete('/:id', function(req, res) {
  Trail.findById(req.params.id)
    .then( function(trail) {
      trail.destroy()
    })
    .then(function() {
      return res.redirect('/trail');
    })
})
module.exports = router;