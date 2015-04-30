var args = arguments[0] || {};
var apiHelper = require('apiHelper');
/*
 * Set product view position and width dynamically
 */
$.outerView.left = args.left;
$.outerView.width = (Ti.Platform.displayCaps.platformWidth);// - (14 * Alloy.Globals.dp));// / 2;
/*
 * Assign product details to clickable controls
 */
$.innerView.product = args.product;
$.lblTitle.product = args.product;
$.tagView.product = args.product;
$.lblDetail.product = args.product;
/*
 * Set Image width dynamically and set image
 */
$.imgProduct.width = (Ti.Platform.displayCaps.platformWidth);// - (28 * Alloy.Globals.dp)) / 2;
apiHelper.APIGetRequestImage(args.product.thumb, $.imgProduct, '', function(e) {
	var status = this.status;
	if (status == 200) {
		var image = e.source.imgView;
		image.setImage(this.responseData);
	}
});
/*
 * Hover effect
 */
$.innerView.addEventListener('touchstart', function(e) {
	$.innerView.backgroundColor = Alloy.Globals.ThemeStyles.products_table_tile.selectedBackgroundColor;
	$.outerView.backgroundColor = Alloy.Globals.ThemeStyles.products_table_tile.selectedBackgroundColor;
});

$.innerView.addEventListener('touchcancel', function(e) {
	$.innerView.backgroundColor = Alloy.Globals.ThemeStyles.products_table_tile.backgroundColor;
	$.outerView.backgroundColor = 'transparent';
});

$.innerView.addEventListener('touchend', function(e) {
	$.innerView.backgroundColor = Alloy.Globals.ThemeStyles.products_table_tile.backgroundColor;
	$.outerView.backgroundColor = 'transparent';
});
/*
 * Open Details window
 */
$.innerView.addEventListener('click', function(e) {
	var detailWin = Alloy.createController('adrProductDetail', {
		ProductItem : e.source.product
	}).getView();
	detailWin.open();
});
/*
 * Set title and Detail label
 */
$.lblTitle.text = args.product.title;
$.lblDetail.text = (args.product.body.length > 37) ? args.product.body.substring(0, 37) + '...' : args.product.body;
/*
 * Set tag labels
 */
for (var i = 0; i < args.product.tags.length; i++) {
	var lblTag = Ti.UI.createLabel({
		color : Alloy.Globals.ThemeStyles.feed_table_row_tags.color,
		font : Alloy.Globals.ThemeStyles.feed_table_row_tags.font,
		left : 0
	});
	if ((i + 1) == args.product.tags.length) {
		lblTag.text = args.product.tags[i];
	} else {
		lblTag.text = args.product.tags[i] + ', ';
	}
	$.tagView.add(lblTag);
};