angular.module('myApp').controller("signupController", function ($scope,$rootScope, $q, $interval,navigationService,apiService,userService,commonMethods) {
    $scope.userLogin = {email:'',password:''};
       $scope.userRegister = async function(){
        try{
            let data = {
                "CompID":commonMethods.getCompID,
                "fullName":$scope.userLogin.fullName,
                "phoneNumber":$scope.userLogin.phoneNumber,
                "createdAt":commonMethods.getCurrentEpochTime(),
                "email":$scope.userLogin.email,
                "password":$scope.userLogin.password
            }
          let response = await apiService.custsignup(data);
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