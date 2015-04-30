var args = arguments[0] || {};

// set title control
$.winContact.setTitleControl(Alloy.createController('titleControl', {
	title : args.title
}).getView());

if (!args.isFlyout) {
	$.winContact.backButtonTitle = 'Back';
} else {
	$.winContact.leftNavButton = Alloy.createController('leftMenuButton').getView();
}

$.btnSendMessage.addEventListener('touchstart', function(e) {
	$.btnSendMessage.backgroundColor = Alloy.Globals.ThemeStyles.button.selectedBackgroundColor;
});

$.btnSendMessage.addEventListener('touchcancel', function(e) {
	$.btnSendMessage.backgroundColor = Alloy.Globals.ThemeStyles.button.backgroundColor;
});

$.btnSendMessage.addEventListener('touchend', function(e) {
	$.btnSendMessage.backgroundColor = Alloy.Globals.ThemeStyles.button.backgroundColor;
}); 