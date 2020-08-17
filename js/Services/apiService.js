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
    factory.getItems = function (data) {
        let url = apiBaseUrl + "getitems";
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
    factory.getorders = function (data) {
        let url = apiBaseUrl + "getorders";
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