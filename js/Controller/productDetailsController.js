angular.module('myApp').controller("productDetailsController", function ($rootScope,$scope, $q, $interval,navigationService,apiService,productService) {
    $scope.productDetails = {};
    async function init() {
        $scope.productDetails = productService.getProductDetailsToLS();
    }



    $scope.addProduct = function(item){
        productService.addtoCart(item);
    }
    
    $scope.addqty = function(data){
        productService.addQty(data);
    }
    
    $scope.subqty = function(data){
        productService.subQty(data);
   }
  
    init();
});