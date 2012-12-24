'use strict';

/* Controllers */


function TeeTimeCtrl($scope, TeeTimeService) {
    $scope.numberPerPage = 5;
    $scope.pageNumber=0;
    var teetimes = TeeTimeService.query({limit:$scope.numberPerPage});
    $scope.teetimes = teetimes;

    $scope.doSearch = function () {
        $scope.teetimes = TeeTimeService.query({limit:$scope.numberPerPage, skip: $scope.pageNumber * $scope.numberPerPage});
        $scope.pageNumber = 0;
    }

    $scope.doGotoPage = function(pageNumber) {
        $scope.teetimes = TeeTimeService.query({limit:$scope.numberPerPage, skip: pageNumber*$scope.numberPerPage});
    }

    $scope.updatePageNumber = function(pageNumber) {
        if (pageNumber >= 0 && pageNumber*$scope.numberPerPage < $scope.teetimes.count) {
            $scope.pageNumber = pageNumber;
            this.doGotoPage($scope.pageNumber);
        }
    }
}


