var args = arguments[0] || {};

var headerBar = Alloy.createController('adrHeaderBar', {
	title : (args.isFlyout) ? args.menuItem.title : args.title,
	parentView : (args.isFlyout) ? $.winSetting : args.parentView,
	isFlyout : args.isFlyout
}).getView();

$.winSetting.add(headerBar);

$.lblTest.text = 'dp / dpi: ' + Ti.Platform.displayCaps.dpi / 160 + ' / ' + Ti.Platform.displayCaps.dpi;
