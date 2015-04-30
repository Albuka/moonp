var args = arguments[0] || {};

var data = [];
for (var i = 0; i < Alloy.Globals.rightMenuItems.length; i++) {
	var row = Ti.UI.createTableViewRow({
		backgroundColor : Alloy.Globals.ThemeStyles.right_menu.backgroundColor,
		backgroundSelectedColor : Alloy.Globals.ThemeStyles.right_menu.selectedBackgroundColor,
		selectedBackgroundColor : Alloy.Globals.ThemeStyles.right_menu.selectedBackgroundColor,
		height : Alloy.Globals.ThemeStyles.right_menu.rowHeight,
		width : Alloy.Globals.ThemeStyles.right_menu.width
	});

	row.addEventListener('click', function(e) {
		if (e.index == 3) {
			if (Ti.Platform.Android) {
				//
			} else {
				// var SettingWin = require('/ui/handheld/ios/Setting');
				// SettingWin = new SettingWin(null, {
				// title : 'Setting'
				// });
				// context.navGroup.openWindow(SettingWin);
				var controller = Alloy.createController('Setting', {
					title : 'Setting',
					isFlyout : false
				});
				var Setting = controller.getView();
				Alloy.Globals.navGroup.openWindow(Setting, {
					animated : true
				});
				Alloy.Globals.navGroup.window = Setting;
			}
		}
		args.context.isMenuShown = false;
		args.context.Right_Menu.animate(Alloy.Globals.animations.slide_out_top);
	});

	var lblTitle = Ti.UI.createLabel({
		text : Alloy.Globals.rightMenuItems[i].title,
		color : Alloy.Globals.rightMenuItems[i].color,
		left : 14,
		font : Alloy.Globals.ThemeStyles.right_menu.font,
		touchEnabled : false
	});
	row.add(lblTitle);

	var seprator = Ti.UI.createView({
		height : 1,
		width : Alloy.Globals.ThemeStyles.right_menu.width,
		backgroundColor : Alloy.Globals.ThemeStyles.right_menu.rowSeparatorColor,
		bottom : 0,
		zIndex : 5
	});
	row.add(seprator);
	data.push(row);
};
$.rightMenuTable.height = data.length * Alloy.Globals.ThemeStyles.right_menu.rowHeight;
$.outerContainer.height = data.length * Alloy.Globals.ThemeStyles.right_menu.rowHeight;
$.rightMenuTable.setData(data); 