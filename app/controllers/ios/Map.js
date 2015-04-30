var args = arguments[0] || {};
var that = this;
this.isMenuShown = false;
// set title control
$.winMap.setTitleControl(Alloy.createController('titleControl', {
	title : args.title
}).getView());

// set left menu button
if (!args.isFlyout) {
	$.winMap.backButtonTitle = 'Back';
} else {
	$.winMap.leftNavButton = Alloy.createController('leftMenuButton').getView();
}

// set right menu
$.Right_Menu = Alloy.createController('RightMenu', {
	context : that
}).getView();
$.winMap.add($.Right_Menu);

// set right menu button
$.winMap.rightNavButton = Alloy.createController('rightMenuButton', {
	Right_Menu : $.Right_Menu,
	context : that
}).getView();

$.winMap.addEventListener('open', function(e) {
	var annotations = [];
	var mapdata = Alloy.Globals.MapData;
	for (var i = 0; i < mapdata.annotations.length; i++) {
		var mountainView = Ti.Map.createAnnotation({
			latitude : mapdata.annotations[i].latitude,
			longitude : mapdata.annotations[i].longitude,
			title : mapdata.annotations[i].title,
			subtitle : mapdata.annotations[i].subtitle,
			// pincolor : Alloy.Globals.Map.ANNOTATION_RED,
			pincolor : Titanium.Map.ANNOTATION_RED,
			leftButton : '/images/sample_map_image.png',
			animate : false,
			rightButton : Ti.UI.iPhone.SystemButton.DISCLOSURE
		});
		annotations.push(mountainView);

		$.mapview.setAnnotations(annotations);
	};
});
