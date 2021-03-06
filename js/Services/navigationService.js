angular.module('myApp').factory('navigationService', function (detachedScope) {

    var activeTemplateName = "dashboard";
    var internalScope = detachedScope.$new();

    var allTemplates = [];
    allTemplates["home"] = { url: "html/home.html", topHeader: "Home" };
    allTemplates["single"] = { url: "html/single-product.html", topHeader: "Product" };
    allTemplates["contact"] = { url: "html/contact-page.html", topHeader: "Contact Us" };
    allTemplates["checkout"] = { url: "html/checkout.html", topHeader: "Checkout" };
    allTemplates["login"] = { url: "html/login.html", topHeader: "Login Here" };
    allTemplates["register"] = { url: "html/register.html", topHeader: "Register Here" };
    allTemplates["myorders"] = { url: "html/user-my-orders.html", topHeader: "My Orders" };
    allTemplates["myaddresses"] = { url: "html/user-my-address.html", topHeader: "My Addresses" };
    return {

        getActiveTemplate: function () {
            return allTemplates[activeTemplateName];
        },

        setActiveTemplate: function (newActiveTemplateName, data) {
            if (data) {
                allTemplates[newActiveTemplateName].data = data;
            }
            activeTemplateName = newActiveTemplateName;
            internalScope.$emit("activeTemplateChange")

        },

        observeActiveTemplateChanged: function (fn) {
            return internalScope.$on("activeTemplateChange", function (e, val) {
                fn(val);
            });
        }
    }
});