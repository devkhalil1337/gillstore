angular.module('myApp').controller("productDetailsController", function ($scope, $q, $interval,navigationService,apiService,productService) {
    $scope.productDetails = {};
    async function init() {
        $scope.productDetails = productService.getProductDetailsToLS();
        console.log("I am init function of productDetailsController");
    }

  
    init();
});