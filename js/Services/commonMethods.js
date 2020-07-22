angular.module('myApp').factory('commonMethods', function ($http, $q) {
    var factory = {};
    factory.getCurrentEpochTime = function (data) {
        return (new Date).getTime();
    }
    factory.convertStringToBytes = function(str){
        str = str.replace(/^data:image\/\w+;base64,/, "");
        let buf = new ArrayBuffer(str.length*2); 
        let bufView = new Uint16Array(buf);
        for (let i=0, strLen=str.length; i < strLen; i++) {
          bufView[i] = str.charCodeAt(i);
        }
        return bufView;
    }
    factory.decodebytesFromString = function(str) {
        if(!str || !str.data || str.data.length == 0) {
          return;
        }
        let base64Str = "";
        for (let i = 0, len = str.data.length; i < len; i++) {
            base64Str += String.fromCharCode(str.data[i])
        }
        return base64Str;
      }
    return factory;
});