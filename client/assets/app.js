var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/index.html',
    controller: 'friendsController'
  })
  .when('/new', {
    templateUrl: 'partials/new.html',
    controller: 'newController'
  })
  .when('/edit/:id', {
    templateUrl: 'partials/edit.html',
    controller: 'editController'
  })
  .when('/show/:id', {
    templateUrl: 'partials/show.html',
    controller: 'showController'
  })
  .when('/edit/:id', {
    templateUrl: 'partials/edit.html',
    controller: 'editController'
  })
  .when('/delete/:id', {
    templateUrl: 'partials/delete.html',
    controller: 'deleteController'
  })
  .otherwise({
    redirectTo: '/'
  })
})
