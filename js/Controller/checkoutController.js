angular.module('myApp').controller("checkoutController", function ($scope, $q, $interval,navigationService,apiService,productService,userService) {
    $scope.cartData = [];

    $scope.paymentMethod = {cash:false,card:false};
    $scope.userAddress = {};
    async function init() {
        $scope.userDetails = userService.getUserCred();
        if(!$scope.userDetails){
            navigationService.setActiveTemplate("login");
        }
        getDataFromSession();
        $scope.totalAmount = productService.getTotalAmount();
        $scope.orderButtonValidation();
        await $scope.getAddress();
    }

    $scope.saveAddress = async function(){
        let data = {
            "Id":$scope.userAddress.Id ? $scope.userAddress.Id : null,
            "customerId":$scope.userDetails.Id,
            "city":$scope.userAddress.city,
            "country":"",
            "zipcode":$scope.userAddress.zipcode,
            "address":$scope.userAddress.address,
            "addressType":$scope.userAddress.addType ? $scope.userAddress.addType: 'Other',
            "isActive":1
        }
        try{
            let response  = {};
            if($scope.userAddress.Id){
                response = await apiService.editaddress(data);
            }else{
                response = await apiService.addaddress(data);
            }
            if(response.data.success){
                $scope.getAddress();
            }
        }catch(error){
            console.log(error);
        }
    }

    $scope.chooseAddress = function(addressType){
        if(!$scope.userAddresses || $scope.userAddresses.length == 0){
            $scope.userAddress.addType == 'Home';
            return;
        }
        $scope.userAddress = $scope.userAddresses.filter(addr => { return addr.addType == addressType && addr.isActive == 1})[0];
    }

    $scope.getAddress = async function(){
        if(!$scope.userDetails || !$scope.userDetails.Id){
            return;
        }
        try{
            let response = await apiService.getaddress({customerId:$scope.userDetails.Id});
            if(response.data.success){
               $scope.userAddresses = response.data.data;
               $scope.userAddress = $scope.userAddresses.filter(addr => { return addr.addType == 'Home' && addr.isActive == 1})[0];
               $scope.$apply();
            }
        }catch(error){
            console.log(error);
        }
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
        $scope.cartData.customerId = $scope.userDetails.Id;
        $scope.cartData.addressId = $scope.userAddress.Id;
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
    

    async function getDataFromSession(){
        $scope.cartData = productService.getProductToLocalStorage();
    }
  
    $scope.$on("$destroy", productService.observeOnCartChange(function (val) {
        getDataFromSession();
        $scope.totalAmount = productService.getTotalAmount();
	}));
  

    init();
});