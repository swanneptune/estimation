const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index');
});

router.get('/admin', function(req, res, next) {
  res.render('pages/admin', { group: 'home' });
});

module.exports = router;