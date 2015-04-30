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
    this.__controllerPath = "index";
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
    $.__views.winParent = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        orientationModes: [ Ti.UI.PORTRAIT ],
        exitOnClose: true,
        id: "winParent",
        backgroundImage: "http://moonp.com.br/app/images/fundo.jpg"
    });
    $.__views.winParent && $.addTopLevelView($.__views.winParent);
    $.__views.flyoutTable = Ti.UI.createTableView({
        width: "80%",
        left: 0,
        showVerticalScrollIndicator: false,
        scrollable: true,
        backgroundColor: Alloy.Globals.ThemeStyles.flyout_menu.backgroundColor,
        separatorStyle: "none",
        top: 0,
        id: "flyoutTable"
    });
    $.__views.winParent.add($.__views.flyoutTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var that = this;
    this.win2open = null;
    this.selectedIndex = 0;
    $.winParent.addEventListener("android:back", function() {
        if (0 == Alloy.Globals.navWindows.length) $.winParent.close(); else if (Alloy.Globals.navWindows.length > 0) {
            var length = Alloy.Globals.navWindows.length;
            for (var i = 0; length > i; i++) Alloy.Globals.navWindows.pop();
        }
    });
    $.winParent.addEventListener("open", function() {
        var rows = [];
        _.each(Alloy.Globals.FlyoutMenu, function(item) {
            rows.push(Alloy.createController("adrFlyoutRow", {
                image: item.iconAndroid,
                title: item.title,
                name: item.name,
                controller: item.controller,
                menuItem: item
            }).getView());
        });
        $.flyoutTable.setData(rows);
        $.flyoutTable.addEventListener("menu:selected", function(e) {
            if ("_main_menu" == e.menuItem.name) ; else if ("_options" == e.menuItem.name) alert("Option Clicked"); else {
                var last_opened_window = null;
                if (that.win2open) {
                    last_opened_window = that.win2open;
                    that.win2open = null;
                }
                var win_path = void 0;
                win_path = e.menuItem.controller;
                var NewWindow = Alloy.createController(win_path, {
                    menuItem: e.menuItem,
                    isFlyout: true
                }).getView();
                that.win2open = NewWindow;
                that.win2open.zIndex = 5;
                $.winParent.add(that.win2open);
                last_opened_window && setTimeout(function() {
                    $.winParent.remove(last_opened_window);
                }, 1e3);
                Alloy.Globals.navWindows.push({
                    src: e.menuItem.controller
                });
                last_window = e.menuItem.controller;
            }
        });
        $.flyoutTable.fireEvent("menu:selected", {
            menuItem: Alloy.Globals.FlyoutMenu[1]
        });
        $.flyoutTable.addEventListener("click", function(obj) {
            if (that.selectedIndex != obj.index) {
                $.flyoutTable.fireEvent("hide", {});
                that.selectedIndex = obj.index;
                $.flyoutTable.fireEvent("menu:selected", {
                    menuItem: Alloy.Globals.FlyoutMenu[obj.index]
                });
            } else $.flyoutTable.fireEvent("hide", {});
        });
        $.flyoutTable.addEventListener("hide", function() {
            var animation = Titanium.UI.createAnimation();
            animation.left = 0;
            animation.duration = 500;
            that.win2open.animate(animation);
            Alloy.Globals.menuVisible = false;
        });
    });
    $.winParent.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;