angular.module('myApp').controller("homeController", function ($rootScope,$scope, $q, $interval,navigationService,apiService,productService,commonMethods) {

    async function init() {
        console.log("I am init function of homeController");
        await getCompanyCategory();
        await getCompanyProducts();
    }


    $scope.getProductDetails = function(item){
        productService.setProductDetailsToLS(item);
        navigationService.setActiveTemplate("single");
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

    $scope.getCate = function(item){
        $scope.selectedCategory = item;
    }
  
    async function getCompanyProducts() {
        try {
            let data = {
                CompID:commonMethods.getCompID
            }
            let response = await apiService.getItems(data);
            await productService.updateQuantityFromSession(response.data); //if products are already in session.
            $scope.comapnyItems = response.data;
            
            $scope.$apply();
        } catch (error) {
            console.log(error);
        }
    }

    async function getCompanyCategory() {
        try {
            let data = {
                CompID:commonMethods.getCompID
            }
            let response = await apiService.getCategory(data);
            $scope.comapnyCategory = response.data;
            $scope.selectedCategory = $scope.comapnyCategory[0];
            $scope.addCategory = $scope.comapnyCategory[0];
            $scope.$apply();
        } catch (error) {
            console.log(error);
        }
    }

    init();
});