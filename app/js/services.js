'use strict';

/* Services */

//var host = "http://localhost:8080\:8080/golfplus";
var host = "https://golfplus-basinc.rhcloud.com";
var src = host+"/rest/teetimes/list";

angular.module('golfangle.services', ['ngResource']).
    factory('TeeTimeService', function($resource){
    	return $resource(src, {}, { 
    		query: {method:'JSONP', params:{callback:'JSON_CALLBACK',skip:"0",limit:10}, isArray:false}
  		});
}).value('version', '0.1');