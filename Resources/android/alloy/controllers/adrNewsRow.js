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
    this.__controllerPath = "adrNewsRow";
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
    $.__views.row = Ti.UI.createTableViewRow({
        height: "auto",
        backgroundColor: Alloy.Globals.ThemeStyles.feed_table_row.backgroundColor,
        backgroundSelectedColor: Alloy.Globals.ThemeStyles.feed_table_row.selectedBackgroundColor,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.imgNews = Ti.UI.createImageView({
        width: Alloy.Globals.ThemeStyles.feed_table_row.imageWidth,
        top: "12dp",
        left: "14dp",
        touchEnabled: false,
        id: "imgNews"
    });
    $.__views.row.add($.__views.imgNews);
    $.__views.outerContainer = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: "10dp",
        bottom: "10dp",
        left: "124dp",
        layout: "vertical",
        touchEnabled: false,
        id: "outerContainer"
    });
    $.__views.row.add($.__views.outerContainer);
    $.__views.lblName = Ti.UI.createLabel({
        left: 0,
        font: Alloy.Globals.ThemeStyles.feed_table_row_title.font,
        color: Alloy.Globals.ThemeStyles.feed_table_row_title.color,
        top: 0,
        height: Ti.UI.SIZE,
        wordWrap: true,
        touchEnabled: false,
        id: "lblName"
    });
    $.__views.outerContainer.add($.__views.lblName);
    $.__views.tagView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        left: 0,
        top: 0,
        touchEnabled: false,
        id: "tagView"
    });
    $.__views.outerContainer.add($.__views.tagView);
    $.__views.lblDetail = Ti.UI.createLabel({
        left: 0,
        right: "14dp",
        top: "10dp",
        font: Alloy.Globals.ThemeStyles.feed_table_row_teaser.font,
        color: Alloy.Globals.ThemeStyles.feed_table_row_teaser.color,
        touchEnabled: false,
        id: "lblDetail"
    });
    $.__views.outerContainer.add($.__views.lblDetail);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.imgNews.image = args.NewsItem.picture;
    $.lblName.text = args.NewsItem.title;
    $.row.NewsItem = args.NewsItem;
    for (var i = 0; i < args.NewsItem.tags.length; i++) {
        var lblTag = Ti.UI.createLabel({
            color: Alloy.Globals.ThemeStyles.feed_table_row_tags.color,
            font: Alloy.Globals.ThemeStyles.feed_table_row_tags.font,
            left: 0
        });
        lblTag.text = i + 1 == args.NewsItem.tags.length ? args.NewsItem.tags[i] : args.NewsItem.tags[i] + ", ";
        $.tagView.add(lblTag);
    }
    $.lblDetail.text = args.NewsItem.body.length > 100 ? args.NewsItem.body.substring(0, 100) + "..." : args.NewsItem.body;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;