angular.module('myApp').controller("userMyAddressController", function ($rootScope,$scope, $q, $interval,navigationService,apiService,productService,userService) {
    $scope.userAddresses = {};
    $scope.userAddress = {};
    function init() {
        $scope.userDetails = userService.getUserCred();
        $scope.getAddress();
    }

    $scope.editAddress = function(address){
        let addressType = address.addType;
        $scope.userAddress = address;
        $scope.userAddress.addressType = addressType.charAt(0).toUpperCase() + addressType.slice(1);
    }

    $scope.saveAddress = async function(){
        let data = {
            "Id":$scope.userAddress.Id ? $scope.userAddress.Id : null,
            "customerId":$scope.userDetails.Id,
            "city":$scope.userAddress.city,
            "country":"",
            "zipcode":$scope.userAddress.zipcode,
            "address":$scope.userAddress.address,
            "addressType":$scope.userAddress.addressType,
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

    $scope.deleteAddress = async function(address){
        let data = {
            "Id":address.Id,
            "customerId":$scope.userDetails.Id,
            "city":address.city,
            "country":"",
            "zipcode":address.zipcode,
            "address":address.address,
            "addressType":address.addType,
            "isActive":0
        }
        try{
            let response  = {};
            response = await apiService.editaddress(data);
            if(response.data.success){
                $scope.getAddress();
            }
        }catch(error){
            console.log(error);
        }
    }

    $scope.getAddress = async function(){
        try{
            let response = await apiService.getaddress({customerId:$scope.userDetails.Id});
            if(response.data.success){
                $scope.userAddresses = response.data.data;
               $scope.$apply();
            }
        }catch(error){
            console.log(error);
        }
    }
  
    init();
});