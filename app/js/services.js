'use strict';

/* Services */

//var host = "http://localhost:8080\:8080/golfplus";
var host = "https://golfplus-basinc.rhcloud.com";
var teetimeSrc = host+"/rest/teetimes/:id";
var userSrc = host+"/rest/users/:id";

angular.module('golfangle.services', ['ngResource']).
    factory('TeeTimeService', function($resource){
    	return $resource(teetimeSrc, {}, { 
    		query: {method:'JSONP', params:{callback:'JSON_CALLBACK',skip:"0",limit:10, orderBy: "date", orderAsc: true}, isArray:false},
    		get: {id: '@id', method:'JSONP', params:{callback:'JSON_CALLBACK'}, isArray:false}
  		});
    }).
    factory('UserService',function($resource) {
    	return $resource(userSrc, {}, {
    		query: {method:'JSONP', params:{callback:'JSON_CALLBACK',skip:"0",limit:10, orderBy: "username", orderAsc: true}, isArray:false},
    		get: {id: '@id', method:'JSONP', params:{callback:'JSON_CALLBACK'}, isArray:false}
    	});
    }).
value('version', '0.1');