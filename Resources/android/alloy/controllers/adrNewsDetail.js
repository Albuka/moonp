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
    this.__controllerPath = "adrNewsDetail";
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
    $.__views.winDetail = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        zIndex: 20,
        navBarHidden: true,
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "winDetail"
    });
    $.__views.winDetail && $.addTopLevelView($.__views.winDetail);
    var __alloyId1 = [];
    $.__views.rowDetail = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        backgroundColor: "transparent",
        layout: "vertical",
        id: "rowDetail"
    });
    __alloyId1.push($.__views.rowDetail);
    $.__views.coverImage = Ti.UI.createImageView({
        top: "10dp",
        right: "14dp",
        left: "14dp",
        bottom: "10dp",
        height: Ti.UI.SIZE,
        hires: true,
        id: "coverImage"
    });
    $.__views.rowDetail.add($.__views.coverImage);
    $.__views.lblName = Ti.UI.createLabel({
        color: Alloy.Globals.ThemeStyles.detail_title.color,
        font: Alloy.Globals.ThemeStyles.detail_title.font,
        top: 0,
        left: "14dp",
        right: "14dp",
        wordWrap: true,
        height: Ti.UI.SIZE,
        id: "lblName"
    });
    $.__views.rowDetail.add($.__views.lblName);
    $.__views.tagView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        left: "14dp",
        right: "14dp",
        id: "tagView"
    });
    $.__views.rowDetail.add($.__views.tagView);
    $.__views.lblDetail = Ti.UI.createLabel({
        color: Alloy.Globals.ThemeStyles.detail_body.color,
        left: "14dp",
        right: "14dp",
        top: "10dp",
        wordWrap: true,
        font: Alloy.Globals.ThemeStyles.detail_body.font,
        id: "lblDetail"
    });
    $.__views.rowDetail.add($.__views.lblDetail);
    $.__views.detailTable = Ti.UI.createTableView({
        showVerticalScrollIndicator: false,
        top: "48dp",
        height: "auto",
        backgroundColor: "transparent",
        separatorColor: "transparent",
        data: __alloyId1,
        id: "detailTable"
    });
    $.__views.winDetail.add($.__views.detailTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var headerBar = Alloy.createController("adrHeaderBar", {
        parentView: $.winDetail,
        title: args.title,
        isFlyout: false
    }).getView();
    $.winDetail.add(headerBar);
    $.coverImage.image = args.NewsItem.picture;
    $.coverImage.width = Ti.Platform.displayCaps.platformWidth - 28 * Alloy.Globals.dp;
    $.lblName.text = args.NewsItem.title;
    for (var i = 0; i < args.NewsItem.tags.length; i++) {
        var lblTag = Ti.UI.createLabel({
            color: Alloy.Globals.ThemeStyles.detail_tags.color,
            font: Alloy.Globals.ThemeStyles.detail_tags.font,
            left: 0
        });
        lblTag.text = i + 1 == args.NewsItem.tags.length ? args.NewsItem.tags[i] : args.NewsItem.tags[i] + ", ";
        $.tagView.add(lblTag);
    }
    $.lblDetail.text = args.NewsItem.body;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;