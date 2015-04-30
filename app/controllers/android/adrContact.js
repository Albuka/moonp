var args = arguments[0] || {};

// REQUIRE THE HEADER BAR FROM headerBar controller
// we will pass our Home View so we can animate it when we click the menu button
var headerBar = Alloy.createController("adrHeaderBar", {
	parentView : $.winContact,
	title : args.menuItem.title,
	isFlyout : args.isFlyout
}).getView();

$.winContact.add(headerBar);
