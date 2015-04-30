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
    this.__controllerPath = "adrRightMenuButton";
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
    $.__views.btnView = Ti.UI.createView({
        height: "48dp",
        width: "49dp",
        backgroundColor: "transparent",
        right: 0,
        id: "btnView"
    });
    $.__views.btnView && $.addTopLevelView($.__views.btnView);
    $.__views.rightMenuButton = Ti.UI.createButton({
        title: "",
        backgroundImage: "/images/icon_menu_right.png",
        height: "16dp",
        width: "24dp",
        zIndex: 5,
        visible: true,
        id: "rightMenuButton"
    });
    $.__views.btnView.add($.__views.rightMenuButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var that = this;
    this.rightMenuView = args.parentView;
    this.lastWinContext = args.context;
    $.btnView.addEventListener("click", function() {
        if (that.lastWinContext.isRightMenuShown) {
            that.lastWinContext.isRightMenuShown = false;
            that.rightMenuView.animate(Alloy.Globals.animations.slide_out_top);
        } else {
            that.rightMenuView.animate(Alloy.Globals.animations.slide_in_top);
            that.lastWinContext.isRightMenuShown = true;
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;