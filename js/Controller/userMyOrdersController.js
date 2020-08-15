angular.module('myApp').controller("userMyOrdersController", function ($rootScope,$scope, $q, $interval,navigationService,apiService,productService,userService) {
    $scope.productDetails = {};
    function init() {
        $scope.userDetails = userService.getUserCred();
    }
  
    init();
});