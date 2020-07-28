angular.module('myApp').controller("checkoutController", function ($scope, $q, $interval,navigationService,apiService,productService) {
    $scope.cartData = [];
    async function init() {
        getDataFromSession();
        $scope.totalAmount = productService.getTotalAmount();
    }



    async function getDataFromSession(){
        $scope.cartData = productService.getProductToLocalStorage();
    }
  
    $scope.$on("$destroy", productService.observeOnCartChange(function (val) {
        getDataFromSession();
        $scope.totalAmount = productService.getTotalAmount();
	}));
  

    init();
});