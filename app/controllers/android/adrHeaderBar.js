var args = arguments[0] || {};
var that = this;
this.parentView = args.parentView;
//$.lblTitle.text = args.title;

if (args.isFlyout) {
	$.menuButton.visible = true;
	$.menuButton.enabled = true;
	$.backButton.visible = false;
	$.backButton.enabled = false;
	//
	$.btnView.addEventListener('click', function(e) {
		if (Alloy.Globals.menuVisible) {
			Alloy.Globals.menuVisible = false;
			var animation = Titanium.UI.createAnimation();
			animation.left = 0;
			animation.duration = 500;
			that.parentView.animate(animation);
		} else {
			Alloy.Globals.menuVisible = true;
			var animation = Titanium.UI.createAnimation();
			animation.left = '80%';
			animation.duration = 500;
			that.parentView.animate(animation);
		}
	});
} else {
	$.backButton.visible = true;
	$.backButton.enabled = true;
	$.menuButton.visible = false;
	$.menuButton.enabled = false;
	//
	$.backButton.addEventListener('click', function(e) {
		that.parentView.close();
	});
}

