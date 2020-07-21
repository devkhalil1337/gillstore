angular.module('myApp').factory('navigationService', function (detachedScope) {

    var activeTemplateName = "dashboard";
    var internalScope = detachedScope.$new();

    var allTemplates = [];
    allTemplates["home"] = { url: "html/home.html", topHeader: "Home" };
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