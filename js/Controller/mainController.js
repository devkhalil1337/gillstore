angular.module('myApp').controller("mainController", function ($scope, $q, $interval,navigationService) {

    function init() {
        $scope.selectedTab = "home"
        console.log("I am init function of mainController");
       navigationService.setActiveTemplate($scope.selectedTab);
    }


    $scope.openPage = function (option) {
        $scope.selectedTab = option;
        navigationService.setActiveTemplate(option);
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