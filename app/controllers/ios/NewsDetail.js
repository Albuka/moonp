var args = arguments[0] || {};

$.winDetail.setTitleControl(Alloy.createController('titleControl', {
	title : 'News Detail'
}).getView());

$.coverImage.image = args.NewsItem.picture;
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
