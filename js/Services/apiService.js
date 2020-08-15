angular.module('myApp').factory('apiService', function ($http, $q) {
    var apiBaseUrl = "https://gillstore.herokuapp.com/company/";
   var auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRldmtoYWxpbEBnbWFpbC5jb20iLCJpYXQiOjE1OTM3ODUxMjh9.aWNcH32pE-ECrox6OuYiS5G6uQD9JSypHa7EXJ9vI88";
    var factory = {};
    factory.setAuthTokenAPI = function(token){
        return auth = "Bearer "+token;
    }
    factory.getUserLogin = function (data) {
        let url = apiBaseUrl + "getuserlogin";
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json"
            },
            data: data
        }
        return $http(req);
    }
    factory.getCompany = function (data) {
        let url = apiBaseUrl + "getcompany";
        var req = {
            method: 'GET',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.updatecompany = function (data) {
        let url = apiBaseUrl + "updatecompany";
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.getCategory = function (data) {
        let url = apiBaseUrl + "getcategory";
        var req = {
            method: 'GET',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.getItems = function (data) {
        let url = apiBaseUrl + "getitems";
        var req = {
            method: 'GET',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.saveItem = function (data) {
        let url = apiBaseUrl + "additem";
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.updateItem = function (data) {
        let url = apiBaseUrl + "updateitem";
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.deleteItem = function (data) {
        let url = apiBaseUrl + "deleteitem";
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.addCategory = function (data) {
        let url = apiBaseUrl + "addcategory";
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.updateCategory = function (data) {
        let url = apiBaseUrl + "updatecategory";
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.getAllusers = function (data) {
        let url = apiBaseUrl + "getAllusers";
        var req = {
            method: 'GET',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.adduser = function (data) {
        let url = apiBaseUrl + "adduser";
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.updateuser = function (data) {
        let url = apiBaseUrl + "updateuser";
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.sendOrder = function (data) {
        let url = apiBaseUrl + "sendOrder";
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.custsignin = function (data) {
        let url = apiBaseUrl + "custsignin";
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.custsignup = function (data) {
        let url = apiBaseUrl + "custsignup";
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.addaddress = function (data) {
        let url = apiBaseUrl + "addaddress";
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.editaddress = function (data) {
        let url = apiBaseUrl + "editaddress";
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    factory.getaddress = function (data) {
        let url = apiBaseUrl + "getaddress";
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': "application/json",
                Authorization: auth
            },
            data: data
        }
        return $http(req);
    }
    return factory;
});