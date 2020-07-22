angular.module('myApp').controller("homeController", function ($scope, $q, $interval,navigationService,apiService,productService,commonMethods) {

    async function init() {
        console.log("I am init function of homeController");
        getCompanyDetails();
        await getCompanyCategory();
        await getCompanyProducts();
    }

    $scope.getProductDetails = function(item){
        productService.setProductDetailsToLS(item);
        navigationService.setActiveTemplate("single");
    }

    $scope.getCate = function(item){
        $scope.selectedCategory = item;
    }

    $scope.convertImages = function(imageData){
        return commonMethods.decodebytesFromString(imageData)
    }
  
    async function getCompanyDetails() {
        try {
            let response = await apiService.getCompany();
            $scope.comapnyDetails = response.data["data"][0];
            $scope.$apply();
        } catch (error) {
            console.log(error);
        }
    }
    async function getCompanyProducts() {
        try {
            let response = await apiService.getItems();
            $scope.comapnyItems = response.data;
            $scope.$apply();
        } catch (error) {
            console.log(error);
        }
    }

    async function getCompanyCategory() {
        try {
            let response = await apiService.getCategory();
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