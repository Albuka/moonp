var args = arguments[0] || {};

$.iconMenu.image = args.image;
$.row1.name = args.name;
$.row1.controller = args.controller;
$.row1.titleValue = args.title;

var divider = Ti.UI.createView({
	height : 60,
	width : 1,
	backgroundColor : '#343434',
	left : 20 + $.iconMenu.width,
	zIndex : 5
});

if (args.name != '_main_menu') {
	$.row1.add(divider);
	var imgRightDisclosure = Ti.UI.createImageView({
		image : (args.name == '_options') ? '/images/ic_arrow_down.png' : '/images/ic_arrow.png',
		height : 32,
		width : 32,
		right : 5
	});
	$.row1.add(imgRightDisclosure);
}
$.lblTitle.left = 18 + divider.left;
$.lblTitle.text = args.title;

if (args.name == '_options') {
	$.lblTitle.color = '#FFFFFF';
}

var separator = Ti.UI.createView({
	height : 1,
	width : '290',
	backgroundColor : '#343434',
	bottom : 0,
	zIndex : 5
});
$.row1.add(separator); 