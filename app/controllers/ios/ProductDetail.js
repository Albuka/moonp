var args = arguments[0] || {};

$.winDetail.setTitleControl(Alloy.createController('titleControl', {
	title : 'Product Detail'
}).getView());

var Views = [];
for (var i = 0; i < args.ProductItem.pictures.length; i++) {
	var picture = args.ProductItem.pictures[i];

	var view = Ti.UI.createView({
		backgroundColor : 'transparent',
		height : Ti.UI.SIZE
	});

	// Create an ImageView.
	var anImageView = Ti.UI.createImageView({
		image : picture,
		height : Alloy.Globals.ThemeStyles.product_slider.height,
		preventDefaultImage : true,
		hires : true
	});
	view.add(anImageView);

	Views.push(view);
};
$.scrollableView.views = Views;

$.lblName.text = args.ProductItem.title;

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

$.lblDetail.text = args.ProductItem.body; 