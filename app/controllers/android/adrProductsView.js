var args = arguments[0] || {};
var apiHelper = require('apiHelper');
/*
 * REQUIRE the headerBar controller
 * we will pass our Home View so we can animate it
 * when we click the menu button
 */
var headerBar = Alloy.createController("adrHeaderBar", {
	parentView : $.winProduct,
	title : args.menuItem.title,
	isFlyout : true
}).getView();
$.winProduct.add(headerBar);
/*
 * Call api function
 */
if (Titanium.Network.online) {
	$.ind.show();
	apiHelper.APIGetRequest(Alloy.Globals.URLS.products_url, function(e) {
		var status = this.status;
		if (status == 200) {
			var Json = eval('(' + this.responseText + ')');
			var rows = [];
			var totalRows = Math.ceil(Json.result.length / 2);
			createLayout(Json.result);
			$.ind.hide();
		}
	}, function(err) {
		$.ind.hide();
		alert('Unknow error from api');
	});
} else {
	alert('No internet connection found');
}
/*
 * Create product Views dynamically
 */
function createLayout(Products) {
	var row;
	var _left = '7dp';
	for (var i = 0; i < Products.length; i++) {
		var view1 = Alloy.createController('adrCustomProductView', {
			product : Products[i],
			left : _left
		}).getView();

		if (i == 0) {
			row = Titanium.UI.createView({
				backgroundSelectedColor : 'transparent',
				height : Ti.UI.SIZE
			});
		}
		row.add(view1);
		//if (((i - 1) % 2 == 0) || (i == Products.length - 1)) {
			_left = '7dp';
			$.scrollViewContainer.add(row);

			var divider = Ti.UI.createView({
				height : '1dp',
				width : Ti.Platform.displayCaps.platformWidth,
				backgroundColor : '#343434'
			});
			$.scrollViewContainer.add(divider);

			row = Titanium.UI.createView({
				backgroundSelectedColor : 'transparent',
				height : Ti.UI.SIZE
			});
		//} else {
		//	_left = (Ti.Platform.displayCaps.platformWidth / 2);
		//}
	}
}