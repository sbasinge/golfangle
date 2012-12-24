'use strict';

/* Filters */

angular.module('golfangle.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).
  filter('rangescott', function() {
      return function(total, numberPerPage) {
          var input = [];
          total = parseInt(total/numberPerPage)+1;
          for (var i=0; i<total; i++)
              input.push(i);
          return input;
      };    }
  );
;
