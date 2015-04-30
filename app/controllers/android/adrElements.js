var args = arguments[0] || {};
var that = this;
/*
 * Get and add right menu view
 */
this.rightMenuView = Alloy.createController("adrRightMenu", {
	context : this
}).getView();
$.winElements.add(this.rightMenuView);
this.isRightMenuShown = false;
/*
 * Get and add right menu button
 */
var rightMenuButton = Alloy.createController("adrRightMenuButton", {
	parentView : this.rightMenuView,
	context : this
}).getView();
/*
 * REQUIRE the headerBar controller
 * we will pass our Home View so we can animate it
 * when we click the menu button
 */
var headerBar = Alloy.createController("adrHeaderBar", {
	parentView : (args.isFlyout) ? $.winElements : args.parentView,
	title : (args.isFlyout) ? args.menuItem.title : args.title,
	isFlyout : args.isFlyout
}).getView();

headerBar.add(rightMenuButton);
$.winElements.add(headerBar);

$.customSlider.addEventListener('change', function(e) {
	Ti.API.info(Math.round(e.source.value));
});

// set width of hightlighted bar
$.progressView.width = 160 * Alloy.Globals.dp;
var pBarWidth = Ti.Platform.displayCaps.platformWidth - (28 * Alloy.Globals.dp);
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

var progressIndicator = Ti.UI.Android.createProgressIndicator({
	message : 'Sending...',
	location : Ti.UI.Android.PROGRESS_INDICATOR_DIALOG,
	type : Ti.UI.Android.PROGRESS_INDICATOR_DETERMINANT,
	cancelable : false,
	min : 0,
	max : 10
});

$.btnLarge.addEventListener('click', function(e) {
	try {
		progressIndicator.show();
		var value = 0;
		setInterval(function() {
			if (value > 10) {
				return;
			}
			progressIndicator.value = value;
			value++;
		}, 200);
		// do some work that takes 3 seconds
		// ie. replace the following setTimeout block with your code
		setTimeout(function() {
			progressIndicator.hide();
		}, 3000);
	} catch(ex) {
		var toast = Titanium.UI.createNotification({
			duration : 2000,
			message : "Unexpected exception occured"
		});
		toast.show();
	}
});
