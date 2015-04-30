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
    this.__controllerPath = "adrFlyoutRow";
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
    $.__views.rowMenu = Ti.UI.createTableViewRow({
        height: Alloy.Globals.ThemeStyles.flyout_menu_item.rowHeight,
        backgroundColor: Alloy.Globals.ThemeStyles.flyout_menu_item.rowBackgroundColor,
        backgroundSelectedColor: Alloy.Globals.ThemeStyles.flyout_menu_item.selectedBackgroundColor,
        id: "rowMenu"
    });
    $.__views.rowMenu && $.addTopLevelView($.__views.rowMenu);
    $.__views.iconMenu = Ti.UI.createImageView({
        width: "32dp",
        height: "32dp",
        left: "10dp",
        id: "iconMenu"
    });
    $.__views.rowMenu.add($.__views.iconMenu);
    $.__views.titleMenu = Ti.UI.createLabel({
        font: Alloy.Globals.ThemeStyles.flyout_menu_item.font,
        id: "titleMenu"
    });
    $.__views.rowMenu.add($.__views.titleMenu);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.rowMenu.backgroundColor = args.menuItem.rowBackgroundColor;
    $.rowMenu.name = args.menuItem.name;
    $.rowMenu.controller = args.menuItem.controller;
    $.rowMenu.titleValue = args.menuItem.title;
    $.iconMenu.width = 32 * Alloy.Globals.dp;
    $.iconMenu.height = 32 * Alloy.Globals.dp;
    $.iconMenu.left = 10 * Alloy.Globals.dp;
    $.iconMenu.image = args.menuItem.iconAndroid;
    var divider = Ti.UI.createView({
        height: 60 * Alloy.Globals.dp,
        width: 1 * Alloy.Globals.dp,
        backgroundColor: "#343434",
        left: 20 * Alloy.Globals.dp + $.iconMenu.width,
        zIndex: 5
    });
    if ("_main_menu" != args.menuItem.name) {
        $.rowMenu.add(divider);
        var img_right_disclosure = Ti.UI.createImageView({
            image: "_options" == args.name ? "/images/ic_arrow_down.png" : "/images/ic_arrow.png",
            height: 32 * Alloy.Globals.dp,
            width: 32 * Alloy.Globals.dp,
            right: 5 * Alloy.Globals.dp
        });
        $.rowMenu.add(img_right_disclosure);
    }
    $.titleMenu.left = 18 * Alloy.Globals.dp + divider.left;
    $.titleMenu.color = args.menuItem.color;
    $.titleMenu.text = args.menuItem.title;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;