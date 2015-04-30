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
    this.__controllerPath = "adrHeaderBar";
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
    $.__views.headerBar = Ti.UI.createView({
        height: "48dp",
        top: 0,
        backgroundColor: "#465264",
        opacity: "0.5",
        id: "headerBar"
    });
    $.__views.headerBar && $.addTopLevelView($.__views.headerBar);
    $.__views.leftDivider = Ti.UI.createView({
        height: "48dp",
        width: "1dp",
        backgroundColor: Alloy.Globals.ThemeStyles.win.separatorColor,
        left: "50dp",
        zIndex: 5,
        id: "leftDivider"
    });
    $.__views.headerBar.add($.__views.leftDivider);
    $.__views.rightDivider = Ti.UI.createView({
        height: "48dp",
        width: "1dp",
        backgroundColor: Alloy.Globals.ThemeStyles.win.separatorColor,
        right: "50dp",
        zIndex: 5,
        id: "rightDivider"
    });
    $.__views.headerBar.add($.__views.rightDivider);
    $.__views.logoView = Ti.UI.createView({
        id: "logoView"
    });
    $.__views.headerBar.add($.__views.logoView);
    $.__views.imgLogo = Ti.UI.createImageView({
        id: "imgLogo"
    });
    $.__views.logoView.add($.__views.imgLogo);
    $.__views.btnView = Ti.UI.createView({
        height: "48dp",
        width: "49dp",
        backgroundColor: "transparent",
        left: 0,
        id: "btnView"
    });
    $.__views.headerBar.add($.__views.btnView);
    $.__views.menuButton = Ti.UI.createButton({
        title: "",
        backgroundImage: "/images/icon_menu.png",
        height: "16dp",
        width: "24dp",
        zIndex: 5,
        visible: false,
        enabled: false,
        id: "menuButton"
    });
    $.__views.btnView.add($.__views.menuButton);
    $.__views.backButton = Ti.UI.createButton({
        height: "40dp",
        width: "40dp",
        backgroundImage: "/images/btn_back.png",
        left: "5dp",
        zIndex: 5,
        visible: false,
        enabled: false,
        id: "backButton"
    });
    $.__views.btnView.add($.__views.backButton);
    $.__views.divider = Ti.UI.createView({
        height: "1dp",
        width: Ti.Platform.displayCaps.platformWidth,
        backgroundColor: Alloy.Globals.ThemeStyles.win.separatorColor,
        bottom: 0,
        zIndex: 5,
        id: "divider"
    });
    $.__views.headerBar.add($.__views.divider);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var that = this;
    this.parentView = args.parentView;
    if (args.isFlyout) {
        $.menuButton.visible = true;
        $.menuButton.enabled = true;
        $.backButton.visible = false;
        $.backButton.enabled = false;
        $.btnView.addEventListener("click", function() {
            if (Alloy.Globals.menuVisible) {
                Alloy.Globals.menuVisible = false;
                var animation = Titanium.UI.createAnimation();
                animation.left = 0;
                animation.duration = 500;
                that.parentView.animate(animation);
            } else {
                Alloy.Globals.menuVisible = true;
                var animation = Titanium.UI.createAnimation();
                animation.left = "80%";
                animation.duration = 500;
                that.parentView.animate(animation);
            }
        });
    } else {
        $.backButton.visible = true;
        $.backButton.enabled = true;
        $.menuButton.visible = false;
        $.menuButton.enabled = false;
        $.backButton.addEventListener("click", function() {
            that.parentView.close();
        });
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;