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
    this.__controllerPath = "adrProductDetail";
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
        navBarHidden: true,
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "winDetail"
    });
    $.__views.winDetail && $.addTopLevelView($.__views.winDetail);
    var __alloyId2 = [];
    $.__views.scrollableView = Ti.UI.createScrollableView({
        showPagingControl: false,
        pagingControlColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        height: "180dp",
        left: "14dp",
        right: "14dp",
        top: "58dp",
        bottom: "10dp",
        zIndex: 4,
        views: __alloyId2,
        id: "scrollableView"
    });
    $.__views.winDetail.add($.__views.scrollableView);
    var __alloyId3 = [];
    $.__views.rowTitle = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        selectionStyle: "none",
        backgroundColor: "transparent",
        layout: "vertical",
        id: "rowTitle"
    });
    __alloyId3.push($.__views.rowTitle);
    $.__views.lblName = Ti.UI.createLabel({
        color: Alloy.Globals.ThemeStyles.detail_title.color,
        font: Alloy.Globals.ThemeStyles.detail_title.font,
        top: 0,
        left: "14dp",
        wordWrap: true,
        height: Ti.UI.SIZE,
        id: "lblName"
    });
    $.__views.rowTitle.add($.__views.lblName);
    $.__views.tagView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        left: "14dp",
        id: "tagView"
    });
    $.__views.rowTitle.add($.__views.tagView);
    $.__views.rowDetail = Ti.UI.createTableViewRow({
        height: "auto",
        selectionStyle: "none",
        backgroundColor: "transparent",
        id: "rowDetail"
    });
    __alloyId3.push($.__views.rowDetail);
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
        height: "auto",
        top: "248dp",
        backgroundColor: "transparent",
        separatorColor: "transparent",
        data: __alloyId3,
        id: "detailTable"
    });
    $.__views.winDetail.add($.__views.detailTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    require("apiHelper");
    var headerBar = Alloy.createController("adrHeaderBar", {
        parentView: $.winDetail,
        title: "Product Detail",
        isFlyout: false
    }).getView();
    $.winDetail.add(headerBar);
    var Views = [];
    for (var i = 0; i < args.ProductItem.pictures.length; i++) {
        var view = Ti.UI.createView({
            backgroundColor: "transparent",
            height: Ti.UI.SIZE
        });
        var anImageView = Ti.UI.createImageView({
            height: Alloy.Globals.ThemeStyles.product_slider.height,
            width: Ti.Platform.displayCaps.platformWidth - 28 * Alloy.Globals.dp,
            preventDefaultImage: true,
            hires: true,
            image: args.ProductItem.pictures[i]
        });
        view.add(anImageView);
        Views.push(view);
    }
    $.scrollableView.views = Views;
    $.lblName.text = args.ProductItem.title;
    $.lblDetail.text = args.ProductItem.body;
    for (var i = 0; i < args.ProductItem.tags.length; i++) {
        var lblTag = Ti.UI.createLabel({
            color: Alloy.Globals.ThemeStyles.detail_tags.color,
            font: Alloy.Globals.ThemeStyles.detail_tags.font,
            left: 0
        });
        lblTag.text = i + 1 == args.ProductItem.tags.length ? args.ProductItem.tags[i] : args.ProductItem.tags[i] + ", ";
        $.tagView.add(lblTag);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;