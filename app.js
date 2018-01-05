'use strict';

// Declare app level module which depends on views, and components
angular.module('coinexApp', [
  'ngRoute',
  'coinexApp.compare',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/compare'});
}]);
