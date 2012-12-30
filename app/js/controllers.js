'use strict';

/* Controllers */


function TeeTimeCtrl($scope, TeeTimeService) {
	$scope.numberPerPage = 5;
	$scope.pageNumber=0;
	$scope.orderBy = 'date';
	$scope.orderAsc = true;
    var teetimes = TeeTimeService.query({limit:$scope.numberPerPage, orderBy: $scope.orderBy, orderAsc: $scope.orderAsc});
    $scope.teetimes = teetimes;

    $scope.doSearch = function () {
        $scope.teetimes = TeeTimeService.query({limit:$scope.numberPerPage, skip: $scope.pageNumber * $scope.numberPerPage, orderBy: $scope.orderBy, orderAsc: $scope.orderAsc});
        $scope.pageNumber = 0;
    };

    $scope.doGotoPage = function(pageNumber) {
        $scope.teetimes = TeeTimeService.query({limit:$scope.numberPerPage, skip: pageNumber*$scope.numberPerPage, orderBy: $scope.orderBy, orderAsc: $scope.orderAsc});
    };

    $scope.updatePageNumber = function(pageNumber) {
        if (pageNumber >= 0 && pageNumber*$scope.numberPerPage < $scope.teetimes.count) {
            $scope.pageNumber = pageNumber;
            this.doGotoPage($scope.pageNumber);
        }
    };
 
    $scope.changeOrderProp = function(orderProp) {
    	if ($scope.orderBy === orderProp) {
    		$scope.orderAsc = !$scope.orderAsc;
    	} else {
    		$scope.orderAsc = true;
    	}
    	$scope.orderBy = orderProp;
        $scope.pageNumber = 0;
        $scope.teetimes = TeeTimeService.query({limit:$scope.numberPerPage, skip: 0, orderBy: $scope.orderBy, orderAsc: $scope.orderAsc});
    };
    
    
}


function TeeTimeDetailCtrl($scope, $routeParams, TeeTimeService) {
	  $scope.teetime = TeeTimeService.get({id: $routeParams.id});

//	  $scope.setImage = function(imageUrl) {
//	    $scope.mainImageUrl = imageUrl;
//	  }
}
