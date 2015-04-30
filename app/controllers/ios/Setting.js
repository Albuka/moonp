var args = arguments[0] || {};

$.winSetting.setTitleControl(Alloy.createController('titleControl', {
	title : args.title
}).getView());

if (!args.isFlyout) {
	$.winSetting.backButtonTitle = 'Back';
} else {
	$.winSetting.leftNavButton = Alloy.createController('leftMenuButton').getView();
}

$.lblTest.text = 'dp / dpi: ' + Ti.Platform.displayCaps.dpi / 160 + ' / ' + Ti.Platform.displayCaps.dpi;
