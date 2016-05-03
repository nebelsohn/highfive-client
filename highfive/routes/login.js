var express = require('express');
var router = express.Router();
var requestify = require('requestify');
var http = require('http');
http.post = require('http-post');
var request = require('request')

exports.logindata = function(req, res, callback) {
	var loginInfo = {};
	loginInfo.email = req.body.email;
	loginInfo.password = req.body.password;
	loginInfo.grant_type = req.body.grant_type;
	
	request({
		url: 'http://139.59.128.218:12354/oauth/token',
		method: 'POST',
		json: true,
		headers: {'authorization': 'key'},
		body: loginInfo
	}, function (error, response, body){
		console.log(response.body + "This is this again");
		callback(response.body);
	});
}