var args = arguments[0] || {};

// set button height and width since we caanot multiply in styles so we have todo it here
$.btn_custom.height = (Ti.Platform.displayCaps.platformWidth / 2) - 20 * Alloy.Globals.dp;
$.btn_custom.width = (Ti.Platform.displayCaps.platformWidth / 2) - 20 * Alloy.Globals.dp;
// set image icon height and width
$.icon.height = 64 * Alloy.Globals.dp;
$.icon.width = 64 * Alloy.Globals.dp;

if (args.left) {
	$.btn_custom.left = args.left;
} else {
	$.btn_custom.right = args.right;
}

$.btn_custom.addEventListener('touchstart', function(e) {
	$.btn_custom.backgroundColor = Alloy.Globals.ThemeStyles.home_button.selectedBackgroundColor;
});

$.btn_custom.addEventListener('touchcancel', function(e) {
	$.btn_custom.backgroundColor = Alloy.Globals.ThemeStyles.home_button.backgroundColor;
});

$.btn_custom.addEventListener('touchend', function(e) {
	$.btn_custom.backgroundColor = Alloy.Globals.ThemeStyles.home_button.backgroundColor;
});

$.icon.image = args.image;
$.lbl_title.text = args.title;
