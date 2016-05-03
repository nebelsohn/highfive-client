var db_functions = require('../db_logic/db.js')

exports.post = function(req, res, err, success){
  var stat = 0;
  if(req.body.user && req.body.user == "magnus") {
    if(req.body.pass && req.body.pass == "12345"){


    success(res);
  }
  }else {
    err(res);
  }
}
