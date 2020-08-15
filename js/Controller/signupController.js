angular.module('myApp').controller("signupController", function ($scope,$rootScope, $q, $interval,navigationService,apiService,userService) {
    $scope.userLogin = {email:'',password:''};
       $scope.userRegister = async function(){
        try{
          let response = await apiService.custsignup($scope.userLogin);
          if(response.data.success){
              alert("User registered successfully!");
              userService.setUserCred(response.data.data[0]);
              navigationService.setActiveTemplate("home");
              $scope.$apply();
          }else{
                alert("some error occurred please try again!");
          }
        }catch(error){
            console.log(error);
        }
    }
});