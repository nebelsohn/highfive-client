var express = require('express');
var router = express.Router();
var requestify = require('requestify');
var http = require('http');
http.post = require('http-post');
var request = require('request')
var index = require('./index.js');


exports.sendToken = function (req, res, callback) {
	console.log(JSON.stringify(index.fbToken) + " Er dette virklelig en token?");


	request({
	url: "http://139.59.128.218:12354/service/facebook",
	method: "POST",
	json: true,
	headers: {'authorization' : index.userToken.access_token, 'token_type' : index.userToken.token_type },
	body: {'fb_access_token' : index.fbToken.access_token}
	}, function (error, response, body){
		callback();
	}); 
	

}