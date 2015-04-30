var args = arguments[0] || {};

function btnMenuClicked(e) {
	if (Alloy.Globals.isMenuVisible) {
		Alloy.Globals.navGroup.animate(Alloy.Globals.animations.right);
		Alloy.Globals.isMenuVisible = false;
	} else {
		Alloy.Globals.navGroup.visible = true;
		Alloy.Globals.navGroup.animate(Alloy.Globals.animations.left);
	}
};
