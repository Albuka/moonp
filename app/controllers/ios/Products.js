var args = arguments[0] || {};
var apiHelper = require('apiHelper');

// set title control
$.winProduct.setTitleControl(Alloy.createController('titleControl', {
	title : args.title
}).getView());

if (!args.isFlyout) {
	$.winProduct.backButtonTitle = 'Back';
} else {
	$.winProduct.leftNavButton = Alloy.createController('leftMenuButton').getView();
}

$.winProduct.addEventListener('open', function(e) {
	// call api function
	if (Titanium.Network.online) {
		$.ind.show();
		apiHelper.APIGetRequest(Alloy.Globals.URLS.products_url, function(e) {
			var status = this.status;
			if (status == 200) {
				var Json = eval('(' + this.responseText + ')');
				var rows = [];
				var totalRows = Math.ceil(Json.result.length / 2);
				rows = createRows(Json.result);
				$.productTable.setData(rows);
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

function createRows(Products) {
	var tableRows = [];
	var row;
	var _left = 7;
	for (var i = 0; i < Products.length; i++) {
		var view1 = Alloy.createController('customProductView', {
			product : Products[i],
			left : _left
		}).getView();
		
		if (i == 0) {
			row = Titanium.UI.createTableViewRow({
				selectionStyle : 'none',
				height : Ti.UI.SIZE
			});
		}
		row.add(view1);
		if (((i - 1) % 2 == 0) || (i == Products.length - 1)) {
			_left = 7;
			tableRows.push(row);
			row = Titanium.UI.createTableViewRow({
				selectionStyle : 'none',
				height : Ti.UI.SIZE
			});
		} else {
			_left = (Ti.Platform.displayCaps.platformWidth / 2);

		}

	};

	return tableRows;
}
