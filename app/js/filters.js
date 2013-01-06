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
          var remainder = total % numberPerPage;
          total = parseInt(total/numberPerPage);
          if (total > 1) {
              for (var i=0; i<total; i++)
                  input.push(i);
              if (remainder > 1)
            	  input.push(total+1);
          }
          return input;
      };    
  });
;
