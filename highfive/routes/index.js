var express = require('express');
var router = express.Router();
var auth = require('./auth.js');
var status = require('./errorHandling.js');
var html_dir = '../html/';
var userInfo = require ('./createuser.js');
var loginInfo = require ('./login.js');
var fbToken = require ('./sendFbToken.js');
var FB = require('fb');
var graph = require('fbgraph');
var app = require('../app.js');
var helpers = require('express-helpers');
var productsListing = require('./productsListing.js');
var getPicture = require('./getPicture.js')

/* GET home page. */
router.get('/', function(req, res) {
    res.render('pages/index.ejs');
});

//GET products from products.js
router.get('/products', function(req, res, next) {
  res.sendFile(html_dir + 'index.html');
});

//Login from login.js and redirects to user's profile page
router.post('/login', function(req, res) {
    console.log(req, req);
  loginInfo.logindata(req, res, function(token){
    exports.userToken = token;
    res.render('pages/profile');
  });

});

//Create new user through createuser.js
router.post('/createuser', function(req, res) {
  userInfo.processdata(req, res, function(status){
    //Checks for success or failure in createuser
    if(status == 'OK')
      res.render('pages/connect.ejs');
    else
      res.render('pages/index.ejs');
  });
});

//Calls create user form and page
router.get('/createuser', function(req, res) {
  res.render('pages/createuser.ejs');
});

router.get('/fbtoken', function(req, res, next) {
 if (!req.query.code) {
    var authUrl = graph.getOauthUrl({
        "client_id": '1724357184474755'
      , "redirect_uri": 'http://139.59.128.218:12576/fbtoken'
      , "scope": 'email, user_location'
    });

    if (!req.query.error) { //checks whether a user denied the app facebook login/permissions
      res.redirect(authUrl);
    } else {  //req.query.error == 'access_denied'
      res.send('access denied');
    }
    return;
  }

  // code is set
  // we'll send that and get the access token
  graph.authorize({
      "client_id": '1724357184474755'
    , "redirect_uri": 'http://139.59.128.218:12576/fbtoken'
    , "client_secret": '4e235742e3cd01a6804360dd8094fd1b'
    , "code": req.query.code
  }, function (err, facebookRes) {
    console.log(facebookRes);
    exports.fbToken = facebookRes;
    res.redirect('/sendFbToken');

  });
});

router.get('/sendFbToken', function(req, res) {
fbToken.sendToken(req, res, function() {res.send()});
res.redirect('/');
});

router.get('/productsListing', function(req, res) {
  //exports.userID = res.body.owner_id;
  productsListing.productsList(req, res, function(products) {
    products = JSON.parse(products);
    exports.userID = products[0].owner_id;
    console.log(products[0].owner_id);
    res.json(products);

  });
});

router.get('/getPicture', function(req, res) {
  getPicture.getPicture(req, res, function() {});
  //console.log('Går der noget galt her?')
  console.log(res.body + 'Dette er anden test');
});



/*FB.api('oauth/access_token', {
    client_id: '1724357184474755',
    client_secret: '4e235742e3cd01a6804360dd8094fd1b',
    grant_type: 'client_credentials'
}, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }

    var accessToken = res.access_token;
    console.log(accessToken + "er dette en token?");
});*/


module.exports = router;
