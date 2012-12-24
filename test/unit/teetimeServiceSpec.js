'use strict';

/* jasmine specs for services go here */

describe('teetimeService', function() {
	var scope, $httpBackend, TeeTimeService, teetimes;
	var host = "http://localhost:8080/golfplus";

  beforeEach(module('golfangle.services'));

	beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $injector) {
		//mock the Pet factory results
		$httpBackend = _$httpBackend_;
		$httpBackend.expectJSONP(host+'/rest/teetimes/list?callback=JSON_CALLBACK&limit=10&skip=0').respond({count:174,teetimes:[{_id:'50429d722849c47987b3e817',latitude:32.843,Date:'1970-01-16T11:54:14.400Z',name:'Wally',longitude:-117.1507,description:'Siberian Husky'}]});
		scope = $rootScope.$new();
		TeeTimeService = $injector.get('TeeTimeService'); 
	})); 

  describe('TeeTime Factory', function() {
	it('should query teetimes', function() {
		teetimes = TeeTimeService.query();
		$httpBackend.flush(); //complete the  http request and get contents
		expect(teetimes).toBeDefined();
		expect(teetimes.count).toEqual(174);
		expect(teetimes.teetimes).toEqual([{_id:'50429d722849c47987b3e817',latitude:32.843,Date:'1970-01-16T11:54:14.400Z',name:'Wally',longitude:-117.1507,description:'Siberian Husky'}]);
	});
  });
}); 