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
    this.__controllerPath = "adrCustomHomeButton";
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
    $.__views.btn_custom = Ti.UI.createView({
        top: 0,
        backgroundColor: Alloy.Globals.ThemeStyles.home_button.backgroundColor,
        backgroundSelectedColor: Alloy.Globals.ThemeStyles.home_button.selectedBackgroundColor,
        id: "btn_custom"
    });
    $.__views.btn_custom && $.addTopLevelView($.__views.btn_custom);
    $.__views.icon = Ti.UI.createImageView({
        hires: true,
        id: "icon"
    });
    $.__views.btn_custom.add($.__views.icon);
    $.__views.lbl_title = Ti.UI.createLabel({
        color: Alloy.Globals.ThemeStyles.home_button.color,
        font: Alloy.Globals.ThemeStyles.home_button.font,
        bottom: "10dp",
        id: "lbl_title"
    });
    $.__views.btn_custom.add($.__views.lbl_title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.btn_custom.height = Ti.Platform.displayCaps.platformWidth / 2 - 20 * Alloy.Globals.dp;
    $.btn_custom.width = Ti.Platform.displayCaps.platformWidth / 2 - 20 * Alloy.Globals.dp;
    $.icon.height = 64 * Alloy.Globals.dp;
    $.icon.width = 64 * Alloy.Globals.dp;
    args.left ? $.btn_custom.left = args.left : $.btn_custom.right = args.right;
    $.btn_custom.addEventListener("touchstart", function() {
        $.btn_custom.backgroundColor = Alloy.Globals.ThemeStyles.home_button.selectedBackgroundColor;
    });
    $.btn_custom.addEventListener("touchcancel", function() {
        $.btn_custom.backgroundColor = Alloy.Globals.ThemeStyles.home_button.backgroundColor;
    });
    $.btn_custom.addEventListener("touchend", function() {
        $.btn_custom.backgroundColor = Alloy.Globals.ThemeStyles.home_button.backgroundColor;
    });
    $.icon.image = args.image;
    $.lbl_title.text = args.title;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;