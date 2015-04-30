var args = arguments[0] || {};
// set title control
$.winElements.setTitleControl(Alloy.createController('titleControl', {
	title : args.title
}).getView());

if (!args.isFlyout) {
	$.winElements.backButtonTitle = 'Back';
} else {
	$.winElements.leftNavButton = Alloy.createController('leftMenuButton').getView();
}

$.customSlider.addEventListener('change', function(e) {
	Ti.API.info(Math.round(e.source.value));
});

var pBarWidth = Ti.Platform.displayCaps.platformWidth - 28;
$.lblProgress.text = Math.round(($.progressView.width / pBarWidth) * 100) + ' %';

$.switchBlack.addEventListener('singletap', function(e) {
	if (e.source.state == 'off') {
		e.source.state = 'on';
		$.switchBlack.backgroundImage = '/images/black_check.png';
	} else {
		e.source.state = 'off';
		$.switchBlack.backgroundImage = '/images/black_uncheck.png';
	}
});

$.switchGreenRed.addEventListener('singletap', function(e) {
	if (e.source.state == 'off') {
		e.source.state = 'on';
		e.source.backgroundImage = '/images/green_check.png';
	} else {
		e.source.state = 'off';
		e.source.backgroundImage = '/images/red_uncheck.png';
	}
});
