//routes will define the pages that require login

angular.module('frodeApp')
.config(function($routeProvider){

  app.config(function($stateProvider){

    $stateProvider
      .state('welcome', {
      url: '/index',
      data: {
        requireLogin: false
      }
    })
    .state('app',{
    abstract:true,
      data: {
        requireLogin: true
      }
    })
    .state('createUser', {
      url: '/createUser',
    })
  });
});
