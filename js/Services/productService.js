angular.module('myApp').factory('productService', function (detachedScope) {


    function _setProductDetailsToLS(item){
        localStorage.setItem("itemDetails",JSON.stringify(item))
    }

    function _getProductDetailsToLS(){
        return JSON.parse(localStorage.getItem("itemDetails"));
    }

    return{
        setProductDetailsToLS:_setProductDetailsToLS,
        getProductDetailsToLS:_getProductDetailsToLS
    }
});