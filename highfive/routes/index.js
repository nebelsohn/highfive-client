var express = require('express');
var router = express.Router();
var auth = require('./auth.js');
var status = require('./errorHandling.js');
var html_dir = '../html/';
var userInfo = require ('./createuser.js');
var loginInfo = require ('./login.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(html_dir + 'index.html');
});

router.post('/login', function(req, res) {
    console.log(req, req);
loginInfo.logindata(req, res, function(token){
	res.send(token);
});

});

router.post('/createuser', function(req, res) {
  userInfo.processdata(req, res, function(){res.send(200)});


});


module.exports = router;
