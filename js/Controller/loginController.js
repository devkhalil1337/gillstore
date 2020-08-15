angular.module('myApp').controller("loginController", function ($scope,$rootScope, $q, $interval,navigationService,apiService,userService) {
    $scope.userLogin = {email:'',password:''};
    function init() {
        console.log("I am init function of loginController");
    }

    $scope.login = async function(){
        try{
          let response = await apiService.custsignin($scope.userLogin);
          if(response.data.success){
              alert("User logged successfully!");
              userService.setUserCred(response.data.data[0]);
              navigationService.setActiveTemplate("home");
              $scope.$apply();
          }else{
                alert("incorrect username or password");
          }
        }catch(error){
            console.log(error);
        }
    }


    init();
});