function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function createLayout(Products) {
        var row;
        var _left = "7dp";
        for (var i = 0; i < Products.length; i++) {
            var view1 = Alloy.createController("adrCustomProductView", {
                product: Products[i],
                left: _left
            }).getView();
            0 == i && (row = Titanium.UI.createView({
                backgroundSelectedColor: "transparent",
                height: Ti.UI.SIZE
            }));
            row.add(view1);
            _left = "7dp";
            $.scrollViewContainer.add(row);
            var divider = Ti.UI.createView({
                height: "1dp",
                width: Ti.Platform.displayCaps.platformWidth,
                backgroundColor: "#343434"
            });
            $.scrollViewContainer.add(divider);
            row = Titanium.UI.createView({
                backgroundSelectedColor: "transparent",
                height: Ti.UI.SIZE
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "adrProductsView";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        var __itemTemplate = __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winProduct = Ti.UI.createView({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        opacity: "0.5",
        id: "winProduct"
    });
    $.__views.winProduct && $.addTopLevelView($.__views.winProduct);
    $.__views.productScroll = Ti.UI.createScrollView({
        top: "48dp",
        height: "auto",
        width: Ti.Platform.displayCaps.platformWidth,
        backgroundColor: "transparent",
        id: "productScroll"
    });
    $.__views.winProduct.add($.__views.productScroll);
    $.__views.scrollViewContainer = Ti.UI.createView({
        height: "auto",
        layout: "vertical",
        width: Ti.Platform.displayCaps.platformWidth,
        backgroundColor: "transparent",
        id: "scrollViewContainer"
    });
    $.__views.productScroll.add($.__views.scrollViewContainer);
    $.__views.ind = Ti.UI.createActivityIndicator({
        style: Titanium.UI.ActivityIndicatorStyle.PLAIN,
        id: "ind"
    });
    $.__views.winProduct.add($.__views.ind);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var apiHelper = require("apiHelper");
    var headerBar = Alloy.createController("adrHeaderBar", {
        parentView: $.winProduct,
        title: args.menuItem.title,
        isFlyout: true
    }).getView();
    $.winProduct.add(headerBar);
    if (Titanium.Network.online) {
        $.ind.show();
        apiHelper.APIGetRequest(Alloy.Globals.URLS.products_url, function(e) {
            var status = this.status;
            if (200 == status) {
                var Json = eval("(" + this.responseText + ")");
                var rows = [];
                var totalRows = Math.ceil(Json.result.length / 2);
                createLayout(Json.result);
                $.ind.hide();
            }
        }, function() {
            $.ind.hide();
            alert("Unknow error from api");
        });
    } else alert("No internet connection found");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;