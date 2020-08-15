angular.module('myApp').controller("mainController", function ($scope,$rootScope, $q, $interval,navigationService,apiService,productService,userService) {
    $scope.cartData = [];
    function init() {
        $scope.selectedTab = "home"
        getCompanyDetails();
        getDataFromSession();
        $scope.totalAmount = productService.getTotalAmount();
        navigationService.setActiveTemplate($scope.selectedTab);
    }


    $scope.openPage = function (option) {
        $scope.selectedTab = option;
        navigationService.setActiveTemplate(option);
    }

    $scope.addqty = function(data){
        productService.addQty(data);
    }
    
    $scope.subqty = function(data){
        productService.subQty(data);
   }

    $scope.removeProductFromCart = function(item){
        productService.removeProductFromCart(item);
    }

    $rootScope.signOut = function(){
        userService.deleteUserCred();
        $scope.userDetails = null;
        navigationService.setActiveTemplate("home");
    }

    async function getDataFromSession(){
        $scope.cartData = productService.getProductToLocalStorage();
    }
    async function getuserCred(){
        $scope.userDetails = userService.getUserCred();
    }
    async function getCompanyDetails() {
        try {
            let response = await apiService.getCompany();
            $rootScope.comapnyDetails = response.data["data"][0];
            $scope.$apply();
        } catch (error) {
            console.log(error);
        }
    }

    $scope.$on("$destroy", productService.observeOnCartChange(function (val) {
        getDataFromSession();
        $scope.totalAmount = productService.getTotalAmount();
	}));
  
    $scope.$on("$destroy", navigationService.observeActiveTemplateChanged(
        function (val) {
            var activeOptionObj = navigationService.getActiveTemplate();
            $scope.activeOption = activeOptionObj.url;
            $rootScope.headerText = activeOptionObj.topHeader;
            getuserCred();
        }
    ));

    init();
});