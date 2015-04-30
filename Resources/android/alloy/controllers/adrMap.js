function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function report(evt) {
        Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "adrMap";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winMap = Ti.UI.createView({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        id: "winMap"
    });
    $.__views.winMap && $.addTopLevelView($.__views.winMap);
    var __alloyId0 = [];
    $.__views.mapView = Ti.Map.createView({
        top: "48dp",
        animate: true,
        regionFit: true,
        userLocation: true,
        mapType: Ti.Map.STANDARD_TYPE,
        annotations: __alloyId0,
        id: "mapView"
    });
    $.__views.winMap.add($.__views.mapView);
    report ? $.__views.mapView.addEventListener("click", report) : __defers["$.__views.mapView!click!report"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    this.rightMenuView = Alloy.createController("adrRightMenu", {
        context: this
    }).getView();
    $.winMap.add(this.rightMenuView);
    this.isRightMenuShown = false;
    var rightMenuButton = Alloy.createController("adrRightMenuButton", {
        parentView: this.rightMenuView,
        context: this
    }).getView();
    var headerBar = Alloy.createController("adrHeaderBar", {
        parentView: args.isFlyout ? $.winMap : args.parentView,
        title: args.isFlyout ? args.menuItem.title : args.title,
        isFlyout: args.isFlyout
    }).getView();
    headerBar.add(rightMenuButton);
    $.winMap.add(headerBar);
    var annotations = [];
    var mapdata = Alloy.Globals.MapData;
    for (var i = 0; i < mapdata.annotations.length; i++) {
        var mountainView = Titanium.Map.createAnnotation({
            latitude: mapdata.annotations[i].latitude,
            longitude: mapdata.annotations[i].longitude,
            title: mapdata.annotations[i].title,
            subtitle: mapdata.annotations[i].subtitle,
            pincolor: Titanium.Map.ANNOTATION_RED
        });
        annotations.push(mountainView);
    }
    $.mapView.region = {
        latitude: mapdata.origin.latitude,
        longitude: mapdata.origin.longitude,
        latitudeDelta: .01,
        longitudeDelta: .01
    };
    $.mapView.setAnnotations(annotations);
    __defers["$.__views.mapView!click!report"] && $.__views.mapView.addEventListener("click", report);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;