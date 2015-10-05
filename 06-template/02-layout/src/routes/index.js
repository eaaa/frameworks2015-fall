var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'express', message: 'hello world from express' });
});

router.get('/data', function(req, res, next) {
  res.json([
    {data: "data from express"}
  ]);
});

module.exports = router;
