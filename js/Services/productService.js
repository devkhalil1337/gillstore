angular.module('myApp').factory('productService', function (detachedScope) {
    var internalScope = detachedScope.$new();


    function _addtoCart(item){
        let productArr = _getProductToLocalStorage();
        if(!productArr)
            productArr = [];
        if(productArr.length == 0){
            item.quantity = item.quantity ? item.quantity:1;
            productArr.push(item);
        }else{
            let repeat = false;
            productArr.forEach(function(product,index){
                if(item.Id == product.Id){
                    repeat = true;
                    productArr[index].quantity = item.quantity  ? item.quantity : 1;
                }
            });
            if(!repeat){
                item.quantity = item.quantity ? item.quantity:1;
                productArr.push(item);
            }
        }
         _setProductToLocalStorage(productArr);
    }


    function _updateQuantityFromSession(dataArr){
        let productArr = _getProductToLocalStorage();
        if(!productArr)
            productArr = [];
        productArr.forEach(pc => {
                dataArr.forEach(liveP =>{
                     if(liveP.Id == pc.Id){
                          liveP.quantity = pc.quantity;
                     }
                })
            });
    }


    function _addQty(item){
        item.quantity = item.quantity ? (item.quantity + 1) :2;
        let productArr = _getProductToLocalStorage();
        if(!productArr)
            productArr = [];
        productArr.forEach(pro =>{
            if(item.Id == pro.Id){
                pro.quantity = item.quantity;
            } 
        });
        _setProductToLocalStorage(productArr);
    }

    function _subQty(item){
        if(!item.quantity){
            item.quantity = 1;
        }
        else if(item.quantity >1){
            item.quantity-- 
        }else{
            item.quantity = 1;
        }
        let productArr = _getProductToLocalStorage();
        if(!productArr)
            productArr = [];
        productArr.forEach(pro =>{
            if(item.Id == pro.Id){
                pro.quantity = item.quantity;
            } 
        });
        _setProductToLocalStorage(productArr);
    }

    function _removeProductFromCart(item){
        let productArr = _getProductToLocalStorage();
        if(!productArr)
            productArr = [];
            productArr = productArr.filter(pc => item.Id != pc.Id);
         _setProductToLocalStorage(productArr);
    }

    function _setProductToLocalStorage(productArr){
        localStorage.setItem("productArr",JSON.stringify(productArr));
        internalScope.$emit("onCartChange");
    }

    function _getProductToLocalStorage(){
        return JSON.parse(localStorage.getItem("productArr"));
    }

    function _setProductDetailsToLS(item){
        localStorage.setItem("itemDetails",JSON.stringify(item))
    }

    function _getProductDetailsToLS(){
        return JSON.parse(localStorage.getItem("itemDetails"));
    }

    function _getTotalAmount(){
        let productArr = _getProductToLocalStorage();
        let total = 0;
        if(!productArr){
            productArr = [];
            return 0;
        }
         productArr.forEach(pro =>{
            total += pro.quantity *  pro.MenuItem_Price
        });

        return total;
    }

    return{
        observeOnCartChange: function (fn) {
			return internalScope.$on("onCartChange", function (e, val) {
				fn(val);
			});
		},
        setProductDetailsToLS:_setProductDetailsToLS,
        getProductDetailsToLS:_getProductDetailsToLS,
        addtoCart:_addtoCart,
        addQty:_addQty,
        subQty:_subQty,
        updateQuantityFromSession:_updateQuantityFromSession,
        getProductToLocalStorage:_getProductToLocalStorage,
        removeProductFromCart:_removeProductFromCart,

        getTotalAmount:_getTotalAmount
    }
});