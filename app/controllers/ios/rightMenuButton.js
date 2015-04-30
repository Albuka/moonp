var args = arguments[0] || {};

function btnRightMenuClicked(e) {
	if (!args.context.isMenuShown) {
		args.Right_Menu.animate(Alloy.Globals.animations.slide_in_top);
		args.context.isMenuShown = true;
	} else {
		args.context.isMenuShown = false;
		args.Right_Menu.animate(Alloy.Globals.animations.slide_out_top);
	}
};
