angular.module('myApp').controller("userMyOrdersController", function ($rootScope,$scope, $q, $interval,navigationService,apiService,productService,userService) {
    $scope.productDetails = {};
    let CompID = 30;
    function init() {
        $scope.userDetails = userService.getUserCred();
        $scope.getorders();
    }
  
    $scope.getOrderDetails = function(parent) {
        var children = [];
        $scope.userOrders.forEach(element => {
            if (element.Recvorder_InvoiceNo == parent.Recvorder_ID) {
                children.push(element);
              }
        });
        return children;
      };

    $scope.getorders = async function(){
        try{
            let response = await apiService.getorders({customerId:$scope.userDetails.Id,CompID:CompID});
            if(response.data.success){
                $scope.userOrders = response.data.data;
                if(!$scope.userOrders || $scope.userOrders.length <= 0){
                    return;
                }
                $scope.mainOrder = $scope.userOrders.reduce((unique, o) => {
                    if(!unique.some(obj => obj.Recvorder_InvoiceNo === o.Recvorder_ID)) {
                      unique.push(o);
                    } 
                return unique;
                },[]);
               $scope.$apply();
            }
        }catch(error){
            console.log(error);
        }
    }

    init();
});