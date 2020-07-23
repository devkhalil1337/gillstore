angular.module('myApp').controller("mainController", function ($scope,$rootScope, $q, $interval,navigationService,apiService) {

    function init() {
        $scope.selectedTab = "home"
        console.log("I am init function of mainController");
        getCompanyDetails();
       navigationService.setActiveTemplate($scope.selectedTab);
    }


    $scope.openPage = function (option) {
        $scope.selectedTab = option;
        navigationService.setActiveTemplate(option);
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
  
    $scope.$on("$destroy", navigationService.observeActiveTemplateChanged(
        function (val) {
            var activeOptionObj = navigationService.getActiveTemplate();
            $scope.activeOption = activeOptionObj.url;
            $scope.headerText = activeOptionObj.topHeader;
        }
    ));

    init();
});