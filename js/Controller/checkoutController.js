angular.module('myApp').controller("checkoutController", function ($scope, $q, $interval,navigationService,apiService,productService) {
    $scope.cartData = [];

    $scope.paymentMethod = {cash:false,card:false};

    function init(){
        $scope.orderButtonValidation();
    }

    $scope.orderButtonValidation = function(){
        if(!$scope.paymentMethod.card && !$scope.paymentMethod.cash){
            return false;
        }
        try{
            if($scope.paymentMethod.cash){
                return true;
            }else
                return false;

        }catch(error){
            return false;
        }
    }
    
    $scope.placeOrder = async function(){
        $scope.cartData.paymentMethod = $scope.paymentMethod;
        try{
           let data =  productService.sendOrder($scope.cartData);
           let response = await apiService.sendOrder(data);
            console.log(response);
           if(response.data.success){
               alert("Order has been placed!");
               productService.clearCart();
               navigationService.setActiveTemplate("home");
                $scope.$apply();
           }
        }catch(error){
            console.log(error);
        }
    }    
    
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