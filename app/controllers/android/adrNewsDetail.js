var args = arguments[0] || {};

var headerBar = Alloy.createController("adrHeaderBar", {
	parentView : $.winDetail,
	title : args.title,
	isFlyout : false
}).getView();
$.winDetail.add(headerBar);

$.coverImage.image = args.NewsItem.picture;
$.coverImage.width = Ti.Platform.displayCaps.platformWidth - (28 * Alloy.Globals.dp);
$.lblName.text = args.NewsItem.title;

for (var i = 0; i < args.NewsItem.tags.length; i++) {
	var lblTag = Ti.UI.createLabel({
		color : Alloy.Globals.ThemeStyles.detail_tags.color,
		font : Alloy.Globals.ThemeStyles.detail_tags.font,
		left : 0
	});
	if ((i + 1) == args.NewsItem.tags.length) {
		lblTag.text = args.NewsItem.tags[i];
	} else {
		lblTag.text = args.NewsItem.tags[i] + ', ';
	}
	$.tagView.add(lblTag);
};

$.lblDetail.text = args.NewsItem.body;
