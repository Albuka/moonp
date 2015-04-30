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
    this.__controllerPath = "adrContact";
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
    $.__views.winContact = Ti.UI.createView({
        backgroundColor: Alloy.Globals.ThemeStyles.win.backgroundColor,
        id: "winContact"
    });
    $.__views.winContact && $.addTopLevelView($.__views.winContact);
    $.__views.contactScroll = Ti.UI.createScrollView({
        height: Ti.UI.SIZE,
        top: "48dp",
        layout: "vertical",
        id: "contactScroll"
    });
    $.__views.winContact.add($.__views.contactScroll);
    $.__views.row = Ti.UI.createView({
        height: Ti.UI.SIZE,
        selectionStyle: "none",
        id: "row"
    });
    $.__views.contactScroll.add($.__views.row);
    $.__views.tfname = Ti.UI.createTextField({
        color: Alloy.Globals.ThemeStyles.textfield.color,
        borderColor: Alloy.Globals.ThemeStyles.textfield.borderColor,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        top: "14dp",
        borderWidth: "1dp",
        hintText: "name*",
        left: "14dp",
        right: "14dp",
        backgroundColor: "transparent",
        width: Ti.UI.FILL,
        font: Alloy.Globals.ThemeStyles.textfield.font,
        paddingLeft: "10dp",
        id: "tfname"
    });
    $.__views.row.add($.__views.tfname);
    $.__views.row = Ti.UI.createView({
        height: Ti.UI.SIZE,
        selectionStyle: "none",
        id: "row"
    });
    $.__views.contactScroll.add($.__views.row);
    $.__views.tfEmail = Ti.UI.createTextField({
        color: Alloy.Globals.ThemeStyles.textfield.color,
        borderColor: Alloy.Globals.ThemeStyles.textfield.borderColor,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        borderWidth: "1dp",
        backgroundColor: "transparent",
        top: "14dp",
        hintText: "email*",
        left: "14dp",
        right: "14dp",
        width: Ti.UI.FILL,
        font: Alloy.Globals.ThemeStyles.textfield.font,
        paddingLeft: "10dp",
        id: "tfEmail"
    });
    $.__views.row.add($.__views.tfEmail);
    $.__views.row = Ti.UI.createView({
        height: Ti.UI.SIZE,
        selectionStyle: "none",
        id: "row"
    });
    $.__views.contactScroll.add($.__views.row);
    $.__views.tfSubject = Ti.UI.createTextField({
        color: Alloy.Globals.ThemeStyles.textfield.color,
        borderColor: Alloy.Globals.ThemeStyles.textfield.borderColor,
        height: Alloy.Globals.ThemeStyles.textfield.height,
        top: "14dp",
        borderWidth: "1dp",
        backgroundColor: "transparent",
        hintText: "subject*",
        left: "14dp",
        right: "14dp",
        width: Ti.UI.FILL,
        font: Alloy.Globals.ThemeStyles.textfield.font,
        paddingLeft: "10dp",
        id: "tfSubject"
    });
    $.__views.row.add($.__views.tfSubject);
    $.__views.row = Ti.UI.createView({
        height: Ti.UI.SIZE,
        selectionStyle: "none",
        id: "row"
    });
    $.__views.contactScroll.add($.__views.row);
    $.__views.taMessage = Ti.UI.createTextArea({
        color: Alloy.Globals.ThemeStyles.textarea.color,
        borderColor: Alloy.Globals.ThemeStyles.textarea.borderColor,
        backgroundColor: "transparent",
        borderWidth: "1dp",
        height: Alloy.Globals.ThemeStyles.textarea.height,
        top: "14dp",
        hintText: "message",
        left: "14dp",
        right: "14dp",
        font: Alloy.Globals.ThemeStyles.textfield.font,
        width: Ti.UI.FILL,
        paddingLeft: "10dp",
        id: "taMessage"
    });
    $.__views.row.add($.__views.taMessage);
    $.__views.row = Ti.UI.createView({
        height: Ti.UI.SIZE,
        selectionStyle: "none",
        id: "row"
    });
    $.__views.contactScroll.add($.__views.row);
    $.__views.btnSendMessage = Ti.UI.createView({
        backgroundColor: Alloy.Globals.ThemeStyles.button.backgroundColor,
        height: Alloy.Globals.ThemeStyles.button.height,
        backgroundSelectedColor: Alloy.Globals.ThemeStyles.button.selectedBackgroundColor,
        top: "34dp",
        left: "14dp",
        right: "14dp",
        width: Ti.UI.FILL,
        id: "btnSendMessage"
    });
    $.__views.row.add($.__views.btnSendMessage);
    $.__views.lblSendMessage = Ti.UI.createLabel({
        text: "SEND MESSAGE",
        color: Alloy.Globals.ThemeStyles.button.color,
        font: Alloy.Globals.ThemeStyles.button.font,
        touchEnabled: false,
        id: "lblSendMessage"
    });
    $.__views.btnSendMessage.add($.__views.lblSendMessage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var headerBar = Alloy.createController("adrHeaderBar", {
        parentView: $.winContact,
        title: args.menuItem.title,
        isFlyout: args.isFlyout
    }).getView();
    $.winContact.add(headerBar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;