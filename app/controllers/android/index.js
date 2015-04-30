var that = this;
this.win2open = null;
this.selectedIndex = 0;

$.winParent.addEventListener('android:back', function(e) {
	if (Alloy.Globals.navWindows.length == 0) {
		$.winParent.close();
	} else if (Alloy.Globals.navWindows.length > 0) {
		var length = Alloy.Globals.navWindows.length;
		for (var i = 0; i < length; i++) {
			Alloy.Globals.navWindows.pop();
		};
	}
});

$.winParent.addEventListener('open', function(e) {
	/*
	 * Menu rows will be created here
	 */
	var rows = [];
	_.each(Alloy.Globals.FlyoutMenu, function(item) {
		rows.push(Alloy.createController("adrFlyoutRow", {
			image : item.iconAndroid,
			title : item.title,
			name : item.name,
			controller : item.controller,
			menuItem : item
		}).getView());
	});
	$.flyoutTable.setData(rows);

	$.flyoutTable.addEventListener('menu:selected', function(e) {
		if (e.menuItem.name == '_main_menu') {
			// DO NOTHING
		} else if (e.menuItem.name == '_options') {
			alert('Option Clicked');
		} else {
			var last_opened_window = null;
			if (that.win2open) {
				last_opened_window = that.win2open;
				that.win2open = null;
			}
			var win_path = undefined;
			win_path = e.menuItem.controller;
			var NewWindow = Alloy.createController(win_path, {
				menuItem : e.menuItem,
				isFlyout : true
			}).getView();

			that.win2open = NewWindow;
			that.win2open.zIndex = 5;
			$.winParent.add(that.win2open);

			if (last_opened_window) {
				setTimeout(function(e) {
					$.winParent.remove(last_opened_window);
				}, 1000);
			}

			// Add window source to Stack
			Alloy.Globals.navWindows.push({
				src : e.menuItem.controller
			});
			last_window = e.menuItem.controller;
		}
	});

	// MENU SELECTION FIRED FOR THE FIRST TIME MANUALLY
	// TO OPEN THE FIRST VIEW IN THE MENU LIST.
	// FOR EXAMPLE HOME IS OUR FIRST VIEW IN MENU
	$.flyoutTable.fireEvent('menu:selected', {
		menuItem : Alloy.Globals.FlyoutMenu[1]
	});

	$.flyoutTable.addEventListener('click', function(obj) {
		if (that.selectedIndex != obj.index) {
			$.flyoutTable.fireEvent('hide', {});
			that.selectedIndex = obj.index;
			$.flyoutTable.fireEvent('menu:selected', {
				menuItem : Alloy.Globals.FlyoutMenu[obj.index]
			});

		} else {
			$.flyoutTable.fireEvent('hide', {});
		}
	});

	$.flyoutTable.addEventListener('hide', function(e) {
		var animation = Titanium.UI.createAnimation();
		animation.left = 0;
		animation.duration = 500;
		that.win2open.animate(animation);
		Alloy.Globals.menuVisible = false;
	});
});

$.winParent.open();
