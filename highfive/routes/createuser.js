var express = require('express');
var router = express.Router();
var requestify = require('requestify');
var http = require('http');
http.post = require('http-post');
var request = require('request')


exports.processdata = function(req, res, callback) {
var userInfo ={};
userInfo.auth_type = "password";
userInfo.email =req.body.email;
userInfo.password = req.body.password;
userInfo.firstname = req.body.firstname;
userInfo.lastname = req.body.lastname;
console.log(userInfo);


var options = {hostname: '139.59.128.218', port: '12354', path: '/users', headers: { 'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': 2, 'authorization': 'key'}};

//http.post(options, userInfo, function(res){
//console.log(res);
//});
//POST to Highfive Backend
/*request({
    url: "http://139.59.128.218:12354/users/",
    method: "POST",
    json: true,
    headers: {
        'authorization': 'key'
    },
    body: userInfo
}, function (error, response, body){
    console.log(response);
});*/
//Post to highfive Auth server
request({
	url: "http://139.59.128.218:12354/users",
	method: "POST",
	json: true,
	headers: {'authorization': 'key'},
	body: userInfo
	}, function (error, response, body){
		console.log(response.headers);
		console.log(response.body);
		callback();
	}); 
	

}
