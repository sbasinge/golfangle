'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /teetimes/list when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/teetimes/list");
  });


  describe('teetimelist', function() {

    beforeEach(function() {
      browser().navigateTo('#/teetimes/list');
    });


    it('should render teetimes list when user navigates to /teetimes/list', function() {
      expect(element('div:first').text()).
        toMatch(/Golf Plus/);
    });

  });


//  describe('view2', function() {
//
//    beforeEach(function() {
//      browser().navigateTo('#/view2');
//    });
//
//
//    it('should render view2 when user navigates to /view2', function() {
//      expect(element('[ng-view] p:first').text()).
//        toMatch(/partial for view 2/);
//    });
//
//  });
});
