var app = angular.module('app',['ngRoute'])
app.config(function($routeProvider){
  $routeProvider
  .when('/dash',{
    templateUrl: 'partials/users.html'
  })
  .when('/new',{
    templateUrl: 'partials/new.html'
  })
  .when('/show/:id',{
    templateUrl: 'partials/show.html'
  })
  .when('/edit/:id',{
    templateUrl: 'partials/edit.html'
  })
  .otherwise({
    redirectTo: '/dash'
  })
})
