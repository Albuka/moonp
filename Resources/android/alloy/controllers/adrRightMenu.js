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
    this.__controllerPath = "adrRightMenu";
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
    $.__views.outerContainer = Ti.UI.createView({
        width: Ti.UI.SIZE,
        top: "-320dp",
        right: 0,
        zIndex: 14,
        id: "outerContainer"
    });
    $.__views.outerContainer && $.addTopLevelView($.__views.outerContainer);
    $.__views.rightMenuTable = Ti.UI.createTableView({
        backgroundColor: "transparent",
        top: 0,
        width: "175dp",
        right: 0,
        zIndex: 16,
        separatorColor: Alloy.Globals.ThemeStyles.right_menu.rowSeparatorColor,
        id: "rightMenuTable"
    });
    $.__views.outerContainer.add($.__views.rightMenuTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var that = this;
    this.lastWinContext = args.context;
    var data = [];
    for (var i = 0; i < Alloy.Globals.rightMenuItems.length; i++) {
        var row = Ti.UI.createTableViewRow({
            backgroundColor: Alloy.Globals.ThemeStyles.right_menu.backgroundColor,
            backgroundSelectedColor: Alloy.Globals.ThemeStyles.right_menu.selectedBackgroundColor,
            height: Alloy.Globals.ThemeStyles.right_menu.rowHeight.toString() + "dp",
            width: Alloy.Globals.ThemeStyles.right_menu.width.toString() + "dp"
        });
        row.addEventListener("click", function(e) {
            if (3 == e.index) {
                var SettingWin = Ti.UI.createWindow({
                    backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
                    zIndex: 20,
                    exitOnClose: false,
                    navBarHidden: true,
                    orientationModes: [ Ti.UI.PORTRAIT ]
                });
                var settingView = Alloy.createController("adrSetting", {
                    parentView: SettingWin,
                    isFlyout: false,
                    title: "Settings"
                }).getView();
                SettingWin.add(settingView);
                SettingWin.open();
            }
            that.lastWinContext.isRightMenuShown = false;
            that.lastWinContext.rightMenuView.animate(Alloy.Globals.animations.slide_out_top);
        });
        var lbl_title = Ti.UI.createLabel({
            text: Alloy.Globals.rightMenuItems[i].title,
            color: Alloy.Globals.rightMenuItems[i].color,
            left: "14dp",
            font: Alloy.Globals.ThemeStyles.right_menu.font,
            touchEnabled: false
        });
        row.add(lbl_title);
        data.push(row);
    }
    $.rightMenuTable.height = data.length * Alloy.Globals.ThemeStyles.right_menu.rowHeight.toString() + "dp";
    $.outerContainer.height = data.length * Alloy.Globals.ThemeStyles.right_menu.rowHeight.toString() + "dp";
    $.rightMenuTable.setData(data);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;