angular.module('myApp').factory('userService', function (detachedScope,commonMethods,apiService) {
    var internalScope = detachedScope.$new();

    function _setUserCred(user){
        localStorage.setItem("userCred",JSON.stringify(user));
    }

    function _getUserCred(){
        return JSON.parse(localStorage.getItem("userCred"));
    }

    function _deleteUserCred(){
        localStorage.removeItem("userCred");
    }
    
    return {
        setUserCred:_setUserCred,
        getUserCred:_getUserCred,
        deleteUserCred:_deleteUserCred
    }

});