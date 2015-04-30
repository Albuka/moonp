var args = arguments[0] || {};
var apiHelper = require('apiHelper');
// set position of product view
$.outerView.left = args.left;

$.innerView.product = args.product;
$.lblTitle.product = args.product;
$.tagView.product = args.product;
$.lblDetail.product = args.product;

$.indSmall.show();
apiHelper.APIGetRequestImage(args.product.thumb, $.imgProduct, $.indSmall, function(e) {
	var status = this.status;
	if (status == 200) {
		var image = e.source.imgView;
		image.setImage(this.responseData);
		e.source.ind.hide();
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
	var detailWin = Alloy.createController('ProductDetail', {
		ProductItem : e.source.product
	}).getView();
	Alloy.Globals.navGroup.openWindow(detailWin);
});

//$.imgProduct.image = args.product.thumb;
$.lblTitle.text = args.product.title;
$.lblDetail.text = (args.product.body.length > 37) ? args.product.body.substring(0, 37) + '...' : args.product.body;
//
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