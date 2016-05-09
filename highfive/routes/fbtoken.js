var request = require('request')


exports.token = function(req, res, callback){
	request({
		url: 'https://www.facebook.com/dialog/oauth?clientid=1724357184474755&redirect_uri=http://139.59.128.218:12576',
		method: 'GET',
		headers:
			[
				"User-Agent", "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"
			]
	},
	function (error, response, body){
		console.log(response.body + "This is this again");
		var fbAccessToken = response.body;
		callback(response.body);
	});
}
