function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "adrSetting";
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
    $.__views.winSetting = Ti.UI.createView({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        id: "winSetting"
    });
    $.__views.winSetting && $.addTopLevelView($.__views.winSetting);
    $.__views.lblTest = Ti.UI.createLabel({
        id: "lblTest"
    });
    $.__views.winSetting.add($.__views.lblTest);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var headerBar = Alloy.createController("adrHeaderBar", {
        title: args.isFlyout ? args.menuItem.title : args.title,
        parentView: args.isFlyout ? $.winSetting : args.parentView,
        isFlyout: args.isFlyout
    }).getView();
    $.winSetting.add(headerBar);
    $.lblTest.text = "dp / dpi: " + Ti.Platform.displayCaps.dpi / 160 + " / " + Ti.Platform.displayCaps.dpi;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;