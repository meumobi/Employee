angular.module('Employee', [
  'ngRoute',
  'mobile-angular-ui',
  'Employee.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});