var args = arguments[0] || {};
var apiHelper = require('apiHelper');
/*
 * REQUIRE the headerBar controller
 * we will pass our Home View so we can animate it
 * when we click the menu button
 */
var headerBar = Alloy.createController("adrHeaderBar", {
	parentView : $.winDetail,
	title : 'Product Detail',
	isFlyout : false
}).getView();
$.winDetail.add(headerBar);

/*
 * Set Images in scrollable view
 */
var Views = [];
for (var i = 0; i < args.ProductItem.pictures.length; i++) {
	var view = Ti.UI.createView({
		backgroundColor : 'transparent',
		height : Ti.UI.SIZE
	});
	// Create an ImageView.
	var anImageView = Ti.UI.createImageView({
		height : Alloy.Globals.ThemeStyles.product_slider.height,
		width : Ti.Platform.displayCaps.platformWidth - (28 * Alloy.Globals.dp),
		preventDefaultImage : true,
		hires : true,
		image: args.ProductItem.pictures[i]
	});
	view.add(anImageView);
	Views.push(view);
};
$.scrollableView.views = Views;
/*
 * Set title and Detail label
 */
$.lblName.text = args.ProductItem.title;
$.lblDetail.text = args.ProductItem.body;
/*
 * Set tag labels
 */
for (var i = 0; i < args.ProductItem.tags.length; i++) {
	var lblTag = Ti.UI.createLabel({
		color : Alloy.Globals.ThemeStyles.detail_tags.color,
		font : Alloy.Globals.ThemeStyles.detail_tags.font,
		left : 0
	});
	if ((i + 1) == args.ProductItem.tags.length) {
		lblTag.text = args.ProductItem.tags[i];
	} else {
		lblTag.text = args.ProductItem.tags[i] + ', ';
	}

	$.tagView.add(lblTag);
};
