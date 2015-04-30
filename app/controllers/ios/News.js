var args = arguments[0] || {};
var apiHelper = require('apiHelper');
var that = this;
this.isMenuShown = false;

$.winNews.setTitleControl(Alloy.createController('titleControl', {
	title : args.title
}).getView());

if (!args.isFlyout) {
	$.winNews.backButtonTitle = 'Back';
} else {
	$.winNews.leftNavButton = Alloy.createController('leftMenuButton').getView();
}

// set right menu
$.Right_Menu = Alloy.createController('RightMenu', {
	context : that
}).getView();
$.winNews.add($.Right_Menu);

// set right menu button
$.winNews.rightNavButton = Alloy.createController('rightMenuButton', {
	Right_Menu : $.Right_Menu,
	context : that
}).getView();

$.winNews.addEventListener('open', function(e) {
	// call api function
	if (Titanium.Network.online) {
		$.ind.show();
		apiHelper.APIGetRequest(Alloy.Globals.URLS.news_url, function(e) {
			var status = this.status;
			if (status == 200) {
				var Json = eval('(' + this.responseText + ')');
				var rows = [];
				for (var i = 0; i < Json.result.length; i++) {
					rows.push(Alloy.createController('newsRow', {
						NewsItem : Json.result[i]
					}).getView());
				};
				$.newsTable.setData(rows);
				$.ind.hide();
			}
		}, function(err) {
			$.ind.hide();
			alert('Unknow error from api');
		});
	} else {
		alert('No internet connection found');
	}
});

$.newsTable.addEventListener('click', function(e) {
	var detailWin = Alloy.createController('NewsDetail', {
		NewsItem : e.row.NewsItem
	}).getView();
	Alloy.Globals.navGroup.openWindow(detailWin);
});
