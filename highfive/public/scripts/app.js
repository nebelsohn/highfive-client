'use strict';

/**
 * @ngdoc overview
 * @name frodeApp
 * @description
 * # frodeApp
 *
 * Main module of the application.
 */
angular
  .module('frodeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'hf.login',
    'hf.signup',
    'hf.dashboard'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/userlogin', {
        templateUrl: 'views/userlogin/userlogin.html',
        controller: 'UserLoginCtrl',
        controllerAs: 'login'
      })
      .when('/userlogin', {
        templateUrl: 'views/userlogin/usersignup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .otherwise({
        redirectTo: '/'
      });

    //app.run(function ($rootScope){
    //  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
    //    var requireLogin = toState.data.requireLogin;
    //
    //    if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
    //      event.preventDefault();
    //      //show a login-in module
    //    }
    //  });
    //});

  });
