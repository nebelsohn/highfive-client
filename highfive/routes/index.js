var express = require('express');
var router = express.Router();
var auth = require('./auth.js');
var status = require('./errorHandling.js');
var html_dir = '../html/';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(html_dir + 'index.html');
});

router.post('/login', function(req, res) {
  res.sendFile('../public/index.html');
});


module.exports = router;
