
angular.module('frodeApp')
  .controller('UserSignupCtrl', ['$routeParams', '$http', function() {

    // STEP 1: Static-SALT = {'http://www.highfive.dk'+'email'+'pwd'}
    // STEP 2: Static-SALT + SHA-256 --> POST to frontend

    var crypto = require('crypto'); // Du skal finde en anden måde at få fat i "crypto" på :)

    var salt = crypto.randomBytes(32).toString('hex');

    user.password += salt;
    user.salt = salt;
    user.password = crypto.createHash('sha256').update(user.password).digest('hex');
    UserSignupCtrl($scope)
    {

    }
//      $scope.makeUrl = function () {
//        return $scope.urlParts.email + "://" + $scope.urlParts.domain + $scope.urlParts.pwd;
////+ "?" + $scope.urlParts.param1 + "&" + $scope.urlParts.param2 + "&" + $scope.urlParts.param3;
//      }
//      return csalt;
//    }
  }]);

