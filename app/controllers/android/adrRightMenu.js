var args = arguments[0] || {};
var that = this;
this.lastWinContext = args.context;

//
var data = [];
for (var i = 0; i < Alloy.Globals.rightMenuItems.length; i++) {
	var row = Ti.UI.createTableViewRow({
		backgroundColor : Alloy.Globals.ThemeStyles.right_menu.backgroundColor,
		backgroundSelectedColor : Alloy.Globals.ThemeStyles.right_menu.selectedBackgroundColor,
		height : Alloy.Globals.ThemeStyles.right_menu.rowHeight.toString() + 'dp',
		width : Alloy.Globals.ThemeStyles.right_menu.width.toString() + 'dp'
	});

	row.addEventListener('click', function(e) {
		if (e.index == 3) {
			var SettingWin = Ti.UI.createWindow({
				backgroundColor : Alloy.Globals.ThemeStyles.win.backgroundColor,
				zIndex : 20,
				exitOnClose : false,
				navBarHidden : true,
				orientationModes : [Ti.UI.PORTRAIT]
			});
			var settingView = Alloy.createController('adrSetting', {
				parentView : SettingWin,
				isFlyout : false,
				title : 'Settings'
			}).getView();
			SettingWin.add(settingView);

			SettingWin.open();
		}
		that.lastWinContext.isRightMenuShown = false;
		that.lastWinContext.rightMenuView.animate(Alloy.Globals.animations.slide_out_top);
	});

	var lbl_title = Ti.UI.createLabel({
		text : Alloy.Globals.rightMenuItems[i].title,
		color : Alloy.Globals.rightMenuItems[i].color,
		left : '14dp',
		font : Alloy.Globals.ThemeStyles.right_menu.font,
		touchEnabled : false
	});
	row.add(lbl_title);

	data.push(row);
};
$.rightMenuTable.height = data.length * Alloy.Globals.ThemeStyles.right_menu.rowHeight.toString() + 'dp';
$.outerContainer.height = data.length * Alloy.Globals.ThemeStyles.right_menu.rowHeight.toString() + 'dp';
$.rightMenuTable.setData(data);
