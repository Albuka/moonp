var args = arguments[0] || {};
var that = this;
this.rightMenuView = args.parentView;
this.lastWinContext = args.context;

$.btnView.addEventListener('click', function(e) {
	if (!that.lastWinContext.isRightMenuShown) {
		that.rightMenuView.animate(Alloy.Globals.animations.slide_in_top);
		that.lastWinContext.isRightMenuShown = true;
	} else {
		that.lastWinContext.isRightMenuShown = false;
		that.rightMenuView.animate(Alloy.Globals.animations.slide_out_top);
	}
});
