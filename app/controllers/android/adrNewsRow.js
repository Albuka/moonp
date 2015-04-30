var args = arguments[0] || {};

$.imgNews.image = args.NewsItem.picture;
$.lblName.text = args.NewsItem.title;
$.row.NewsItem = args.NewsItem;

for (var i = 0; i < args.NewsItem.tags.length; i++) {
	var lblTag = Ti.UI.createLabel({
		color : Alloy.Globals.ThemeStyles.feed_table_row_tags.color,
		font : Alloy.Globals.ThemeStyles.feed_table_row_tags.font,
		left : 0
	});
	if ((i + 1) == args.NewsItem.tags.length) {
		lblTag.text = args.NewsItem.tags[i];
	} else {
		lblTag.text = args.NewsItem.tags[i] + ', ';
	}

	$.tagView.add(lblTag);
};

$.lblDetail.text = (args.NewsItem.body.length > 100) ? args.NewsItem.body.substring(0, 100) + '...' : args.NewsItem.body; 