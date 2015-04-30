var args = arguments[0] || {};
var apiHelper = require('apiHelper');
var that = this;
/*
 * Get and add right menu view
 */
this.rightMenuView = Alloy.createController("adrRightMenu", {
	context : that
}).getView();
$.winNews.add(this.rightMenuView);
this.isRightMenuShown = false;
/*
 * Get and add right menu button
 */
var rightMenuButton = Alloy.createController("adrRightMenuButton", {
	parentView : this.rightMenuView,
	context : that
}).getView();
/*
 * REQUIRE the headerBar controller
 * we will pass our Home View so we can animate it
 * when we click the menu button
 */
var headerBar = Alloy.createController("adrHeaderBar", {
	parentView : (args.isFlyout) ? $.winNews : args.parentView,
	title : (args.isFlyout) ? args.menuItem.title : args.title,
	isFlyout : args.isFlyout
}).getView();

headerBar.add(rightMenuButton);
$.winNews.add(headerBar);

// call api function
if (Titanium.Network.online) {
	$.ind.show();
	apiHelper.APIGetRequest(Alloy.Globals.URLS.news_url, function(e) {
		var status = this.status;
		if (status == 200) {
			var Json = eval('(' + this.responseText + ')');
			var rows = [];

			for (var i = 0; i < Json.result.length; i++) {
				rows.push(Alloy.createController('adrNewsRow', {
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

$.newsTable.addEventListener('click', function(e) {
	var detailWin = Alloy.createController('adrNewsDetail', {
		NewsItem : e.row.NewsItem,
		title : 'News Detail',
		isFlyout : false
	}).getView();
	detailWin.open();
}); 