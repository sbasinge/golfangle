'use strict';

/* jasmine specs for services go here */

describe('userService', function() {
	var scope, $httpBackend, UserService, users;
	var host = "http://localhost:8080/golfplus";

  beforeEach(module('golfangle.services'));

	beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $injector) {
		//mock the Pet factory results
		$httpBackend = _$httpBackend_;
		$httpBackend.expectJSONP(host+'/rest/users?callback=JSON_CALLBACK&limit=10&orderAsc=true&orderBy=date&skip=0').respond({count:12,users:[{_id:'50429d722849c47987b3e817',latitude:32.843,Date:'1970-01-16T11:54:14.400Z',name:'Wally',longitude:-117.1507,description:'Siberian Husky'}]});
		scope = $rootScope.$new();
		UserService = $injector.get('UserService'); 
	})); 

  describe('User Factory', function() {
	it('should query users', function() {
		users = UserService.query();
		$httpBackend.flush(); //complete the  http request and get contents
		expect(users).toBeDefined();
		expect(users.count).toEqual(12);
		expect(users.teetimes).toEqual([{_id:'50429d722849c47987b3e817',latitude:32.843,Date:'1970-01-16T11:54:14.400Z',name:'Wally',longitude:-117.1507,description:'Siberian Husky'}]);
	});
  });
}); 