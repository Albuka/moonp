var args = arguments[0] || {};
// set row background color
$.rowMenu.backgroundColor = args.menuItem.rowBackgroundColor;
$.rowMenu.name = args.menuItem.name;
$.rowMenu.controller = args.menuItem.controller;
$.rowMenu.titleValue = args.menuItem.title;

// set icon height and width
$.iconMenu.width = 32 * Alloy.Globals.dp;
$.iconMenu.height = 32 * Alloy.Globals.dp;
$.iconMenu.left = 10 * Alloy.Globals.dp;
$.iconMenu.image = args.menuItem.iconAndroid;

var divider = Ti.UI.createView({
	height : 60 * Alloy.Globals.dp,
	width : 1 * Alloy.Globals.dp,
	backgroundColor : '#343434',
	left : 20 * Alloy.Globals.dp + $.iconMenu.width,
	zIndex : 5
});

if (args.menuItem.name != '_main_menu') {
	$.rowMenu.add(divider);
	var img_right_disclosure = Ti.UI.createImageView({
		image : (args.name == '_options') ? '/images/ic_arrow_down.png' : '/images/ic_arrow.png',
		height : 32 * Alloy.Globals.dp,
		width : 32 * Alloy.Globals.dp,
		right : 5 * Alloy.Globals.dp
	});
	$.rowMenu.add(img_right_disclosure);
}
$.titleMenu.left = (18 * Alloy.Globals.dp) + divider.left;
$.titleMenu.color = args.menuItem.color;
$.titleMenu.text = args.menuItem.title;

// var separator = Ti.UI.createView({
	// height : 1 * Alloy.Globals.dp,
	// width : 290 * Alloy.Globals.dp,
	// backgroundColor : Alloy.Globals.ThemeStyles.flyout_menu_item.rowSeparatorColor,
	// bottom : 0,
	// zIndex : 5
// });
// $.rowMenu.add(separator); 