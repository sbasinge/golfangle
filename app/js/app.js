'use strict';


// Declare app level module which depends on filters, and services
angular.module('golfangle', ['golfangle.filters', 'golfangle.services', 'golfangle.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/teetimes/list', {templateUrl: 'partials/teetimes.html', controller: TeeTimeCtrl});
    $routeProvider.when('/teetimes/get/:id', {templateUrl: 'partials/teetime-detail.html', controller: TeeTimeDetailCtrl});
    $routeProvider.when('/users/list', {templateUrl: 'partials/users.html', controller: UserCtrl});
    $routeProvider.when('/users/get/:id', {templateUrl: 'partials/teetime-detail.html', controller: UserDetailCtrl});
    $routeProvider.otherwise({redirectTo: '/teetimes/list'});
  }])
;
