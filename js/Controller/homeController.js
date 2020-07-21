angular.module('myApp').controller("homeController", function ($scope, $q, $interval,navigationService,apiService) {

    async function init() {
//        $scope.selectedTab = "home"
        console.log("I am init function of homeController");
        await getCompanyDetails();
        await getCompanyCategory();
        await  getCompanyProducts();
//       navigationService.setActiveTemplate($scope.selectedTab);
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
            // $scope.selectedCategory = $scope.comapnyCategory[0];
            // $scope.addCategory = $scope.comapnyCategory[0];
            $scope.$apply();
        } catch (error) {
            console.log(error);
        }
    }


    init();
});