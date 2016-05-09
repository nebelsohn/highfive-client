var express = require('express');
var router = express.Router();
var requestify = require('requestify');
var http = require('http');
http.post = require('http-post');
var request = require('request');


exports.processdata = function(req, res, callback) {
var userInfo ={};
userInfo.grant_type = "password";
userInfo.email =req.body.email;
userInfo.password = req.body.password;
userInfo.firstname = req.body.firstname;
userInfo.lastname = req.body.lastname;


//http.post(options, userInfo, function(res){
//console.log(res);
//});
//POST to Highfive Backend
request({
    url: "http://139.59.128.218:12354/users/",
    method: "POST",
    json: true,
    headers: {
        'authorization': 'key'
    },
    body: userInfo
}, function (error, response, body){
    console.log(response);
    callback(body);
});
//Post to highfive Auth server


}
