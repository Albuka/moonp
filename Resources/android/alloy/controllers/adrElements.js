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
    this.__controllerPath = "adrElements";
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
    $.__views.winElements = Ti.UI.createView({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        id: "winElements"
    });
    $.__views.winElements && $.addTopLevelView($.__views.winElements);
    $.__views.elementsScroll = Ti.UI.createScrollView({
        height: Ti.UI.SIZE,
        top: "48dp",
        layout: "vertical",
        id: "elementsScroll"
    });
    $.__views.winElements.add($.__views.elementsScroll);
    $.__views.rowText = Ti.UI.createView({
        height: Ti.UI.SIZE,
        selectionStyle: 0,
        id: "rowText"
    });
    $.__views.elementsScroll.add($.__views.rowText);
    $.__views.textFname = Ti.UI.createTextField({
        color: Alloy.Globals.ThemeStyles.textfield.color,
        borderColor: Alloy.Globals.ThemeStyles.textfield.borderColor,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        borderWidth: "1dp",
        top: "10dp",
        backgroundColor: "transparent",
        hintText: "Enter text ...",
        left: "14dp",
        right: "14dp",
        width: Ti.UI.FILL,
        font: Alloy.Globals.ThemeStyles.textfield.font,
        paddingLeft: "10dp",
        id: "textFname"
    });
    $.__views.rowText.add($.__views.textFname);
    $.__views.rowSlider = Ti.UI.createView({
        height: Ti.UI.SIZE,
        selectionStyle: 0,
        id: "rowSlider"
    });
    $.__views.elementsScroll.add($.__views.rowSlider);
    $.__views.customSlider = Ti.UI.createSlider({
        min: 0,
        max: 100,
        value: 0,
        left: "14dp",
        top: "24dp",
        right: "14dp",
        width: Ti.UI.FILL,
        height: "31dp",
        leftTrackImage: "/images/slider_right.png",
        rightTrackImage: "/images/slider_default.png",
        id: "customSlider"
    });
    $.__views.rowSlider.add($.__views.customSlider);
    $.__views.pBar = Ti.UI.createView({
        backgroundImage: "/images/slider_default.png",
        height: "20dp",
        top: "68dp",
        left: "14dp",
        right: "14dp",
        id: "pBar"
    });
    $.__views.rowSlider.add($.__views.pBar);
    $.__views.progressView = Ti.UI.createView({
        top: "68dp",
        left: "14dp",
        right: "14dp",
        height: "20dp",
        backgroundImage: "/images/slider_right.png",
        zIndex: 4,
        id: "progressView"
    });
    $.__views.rowSlider.add($.__views.progressView);
    $.__views.lblProgress = Ti.UI.createLabel({
        right: "5dp",
        color: Alloy.Globals.ThemeStyles.lableProgress.color,
        font: Alloy.Globals.ThemeStyles.lableProgress.font,
        id: "lblProgress"
    });
    $.__views.progressView.add($.__views.lblProgress);
    $.__views.rowSwitch = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "rowSwitch"
    });
    $.__views.elementsScroll.add($.__views.rowSwitch);
    $.__views.basicSwitch1 = Ti.UI.createSwitch({
        value: true,
        top: "24dp",
        height: "45dp",
        width: "70dp",
        id: "basicSwitch1"
    });
    $.__views.rowSwitch.add($.__views.basicSwitch1);
    $.__views.switchBlack = Ti.UI.createButton({
        height: "40dp",
        width: "81dp",
        backgroundImage: "/images/black_uncheck.png",
        left: "14dp",
        top: "24dp",
        title: "",
        state: "off",
        id: "switchBlack"
    });
    $.__views.rowSwitch.add($.__views.switchBlack);
    $.__views.switchGreenRed = Ti.UI.createButton({
        height: "40dp",
        width: "81dp",
        backgroundImage: "/images/green_check.png",
        right: "14dp",
        top: "24dp",
        title: "",
        state: "on",
        id: "switchGreenRed"
    });
    $.__views.rowSwitch.add($.__views.switchGreenRed);
    $.__views.rowButtonMedium = Ti.UI.createView({
        height: Ti.UI.SIZE,
        selectionStyle: 0,
        id: "rowButtonMedium"
    });
    $.__views.elementsScroll.add($.__views.rowButtonMedium);
    $.__views.btnSmall1 = Ti.UI.createButton({
        height: "41dp",
        width: "141dp",
        font: Alloy.Globals.ThemeStyles.button.font,
        color: Alloy.Globals.ThemeStyles.button.color,
        backgroundColor: Alloy.Globals.ThemeStyles.button.backgroundColor,
        backgroundSelectedColor: Alloy.Globals.ThemeStyles.button.selectedBackgroundColor,
        left: "14dp",
        top: "24dp",
        borderRadius: "5dp",
        title: "Button",
        id: "btnSmall1"
    });
    $.__views.rowButtonMedium.add($.__views.btnSmall1);
    $.__views.btnSmall2 = Ti.UI.createButton({
        height: "41dp",
        width: "141dp",
        font: Alloy.Globals.ThemeStyles.button.font,
        color: Alloy.Globals.ThemeStyles.button.color,
        backgroundColor: Alloy.Globals.ThemeStyles.button.selectedBackgroundColor,
        backgroundSelectedColor: Alloy.Globals.ThemeStyles.button.backgroundColor,
        right: "14dp",
        borderRadius: "5dp",
        top: "24dp",
        title: "Button",
        id: "btnSmall2"
    });
    $.__views.rowButtonMedium.add($.__views.btnSmall2);
    $.__views.rowButtonLarge = Ti.UI.createView({
        height: Ti.UI.SIZE,
        selectionStyle: 0,
        id: "rowButtonLarge"
    });
    $.__views.elementsScroll.add($.__views.rowButtonLarge);
    $.__views.btnLarge = Ti.UI.createButton({
        height: Alloy.Globals.ThemeStyles.button.height,
        width: Ti.UI.FILL,
        color: Alloy.Globals.ThemeStyles.button.color,
        font: Alloy.Globals.ThemeStyles.button.font,
        backgroundColor: Alloy.Globals.ThemeStyles.button.backgroundColor,
        backgroundSelectedColor: Alloy.Globals.ThemeStyles.button.selectedBackgroundColor,
        left: "14dp",
        right: "14dp",
        top: "24dp",
        title: "SEND MESSAGE",
        id: "btnLarge"
    });
    $.__views.rowButtonLarge.add($.__views.btnLarge);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    this.rightMenuView = Alloy.createController("adrRightMenu", {
        context: this
    }).getView();
    $.winElements.add(this.rightMenuView);
    this.isRightMenuShown = false;
    var rightMenuButton = Alloy.createController("adrRightMenuButton", {
        parentView: this.rightMenuView,
        context: this
    }).getView();
    var headerBar = Alloy.createController("adrHeaderBar", {
        parentView: args.isFlyout ? $.winElements : args.parentView,
        title: args.isFlyout ? args.menuItem.title : args.title,
        isFlyout: args.isFlyout
    }).getView();
    headerBar.add(rightMenuButton);
    $.winElements.add(headerBar);
    $.customSlider.addEventListener("change", function(e) {
        Ti.API.info(Math.round(e.source.value));
    });
    $.progressView.width = 160 * Alloy.Globals.dp;
    var pBarWidth = Ti.Platform.displayCaps.platformWidth - 28 * Alloy.Globals.dp;
    $.lblProgress.text = Math.round($.progressView.width / pBarWidth * 100) + " %";
    $.switchBlack.addEventListener("singletap", function(e) {
        if ("off" == e.source.state) {
            e.source.state = "on";
            $.switchBlack.backgroundImage = "/images/black_check.png";
        } else {
            e.source.state = "off";
            $.switchBlack.backgroundImage = "/images/black_uncheck.png";
        }
    });
    $.switchGreenRed.addEventListener("singletap", function(e) {
        if ("off" == e.source.state) {
            e.source.state = "on";
            e.source.backgroundImage = "/images/green_check.png";
        } else {
            e.source.state = "off";
            e.source.backgroundImage = "/images/red_uncheck.png";
        }
    });
    var progressIndicator = Ti.UI.Android.createProgressIndicator({
        message: "Sending...",
        location: Ti.UI.Android.PROGRESS_INDICATOR_DIALOG,
        type: Ti.UI.Android.PROGRESS_INDICATOR_DETERMINANT,
        cancelable: false,
        min: 0,
        max: 10
    });
    $.btnLarge.addEventListener("click", function() {
        try {
            progressIndicator.show();
            var value = 0;
            setInterval(function() {
                if (value > 10) return;
                progressIndicator.value = value;
                value++;
            }, 200);
            setTimeout(function() {
                progressIndicator.hide();
            }, 3e3);
        } catch (ex) {
            var toast = Titanium.UI.createNotification({
                duration: 2e3,
                message: "Unexpected exception occured"
            });
            toast.show();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;