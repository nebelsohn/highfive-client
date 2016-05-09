
angular.module('frodeApp')
  .controller('UserLoginCtrl', ['$routeParams', '$http', function($routeParams, $http) {
    var controller = this;

    $http({method: 'GET', url: '/userlogin/' + $routeParams.id}).success(function(data){
      controller.login = data;
    });
  }]);

