var request = require('request')

exports.productsList = function(req, res, callback){
  request({
    url : 'http://139.59.128.218:12354/products',
    method : 'GET',
    headers : {'authorization' : 'key'}
  },
  function(error, response, body){
    callback(response.body);
  });
}
