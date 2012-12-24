'use strict';


// Declare app level module which depends on filters, and services
angular.module('golfangle', ['golfangle.filters', 'golfangle.services', 'golfangle.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/teetimes', {templateUrl: 'partials/teetimes.html', controller: TeeTimeCtrl});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: TeeTimeCtrl});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
