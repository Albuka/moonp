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
    this.__controllerPath = "adrNews";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        var __itemTemplate = __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winNews = Ti.UI.createView({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        id: "winNews"
    });
    $.__views.winNews && $.addTopLevelView($.__views.winNews);
    $.__views.newsTable = Ti.UI.createTableView({
        showVerticalScrollIndicator: false,
        height: "auto",
        top: "48dp",
        backgroundColor: "transparent",
        separatorColor: "#343434",
        id: "newsTable"
    });
    $.__views.winNews.add($.__views.newsTable);
    $.__views.ind = Ti.UI.createActivityIndicator({
        style: Titanium.UI.ActivityIndicatorStyle.PLAIN,
        id: "ind"
    });
    $.__views.winNews.add($.__views.ind);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var apiHelper = require("apiHelper");
    var that = this;
    this.rightMenuView = Alloy.createController("adrRightMenu", {
        context: that
    }).getView();
    $.winNews.add(this.rightMenuView);
    this.isRightMenuShown = false;
    var rightMenuButton = Alloy.createController("adrRightMenuButton", {
        parentView: this.rightMenuView,
        context: that
    }).getView();
    var headerBar = Alloy.createController("adrHeaderBar", {
        parentView: args.isFlyout ? $.winNews : args.parentView,
        title: args.isFlyout ? args.menuItem.title : args.title,
        isFlyout: args.isFlyout
    }).getView();
    headerBar.add(rightMenuButton);
    $.winNews.add(headerBar);
    if (Titanium.Network.online) {
        $.ind.show();
        apiHelper.APIGetRequest(Alloy.Globals.URLS.news_url, function(e) {
            var status = this.status;
            if (200 == status) {
                var Json = eval("(" + this.responseText + ")");
                var rows = [];
                for (var i = 0; i < Json.result.length; i++) rows.push(Alloy.createController("adrNewsRow", {
                    NewsItem: Json.result[i]
                }).getView());
                $.newsTable.setData(rows);
                $.ind.hide();
            }
        }, function() {
            $.ind.hide();
            alert("Unknow error from api");
        });
    } else alert("No internet connection found");
    $.newsTable.addEventListener("click", function(e) {
        var detailWin = Alloy.createController("adrNewsDetail", {
            NewsItem: e.row.NewsItem,
            title: "News Detail",
            isFlyout: false
        }).getView();
        detailWin.open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;