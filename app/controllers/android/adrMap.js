var args = arguments[0] || {};
var that = this;
/*
 * Get and add right menu view
 */
this.rightMenuView = Alloy.createController("adrRightMenu", {
	context : this
}).getView();
$.winMap.add(this.rightMenuView);
this.isRightMenuShown = false;
/*
 * Get and add right menu button
 */
var rightMenuButton = Alloy.createController("adrRightMenuButton", {
	parentView : this.rightMenuView,
	context : this
}).getView();
/*
 * REQUIRE the headerBar controller
 * we will pass our Home View so we can animate it
 * when we click the menu button
 */
var headerBar = Alloy.createController("adrHeaderBar", {
	parentView : (args.isFlyout) ? $.winMap : args.parentView,
	title : (args.isFlyout) ? args.menuItem.title : args.title,
	isFlyout : args.isFlyout
}).getView();

headerBar.add(rightMenuButton);
$.winMap.add(headerBar);

function report(evt) {
	Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
}

var annotations = [];
var mapdata = Alloy.Globals.MapData;
for (var i = 0; i < mapdata.annotations.length; i++) {
	var mountainView = Titanium.Map.createAnnotation({
		latitude : mapdata.annotations[i].latitude,
		longitude : mapdata.annotations[i].longitude,
		title : mapdata.annotations[i].title,
		subtitle : mapdata.annotations[i].subtitle,
		// pincolor : Ti.Map.ANNOTATION_RED,
		pincolor: Titanium.Map.ANNOTATION_RED,
		// leftButton : '/images/sample_map_image.png',
		// animate : false
	});
	annotations.push(mountainView);
};


$.mapView.region = {
	latitude : mapdata.origin.latitude, //37.390749,
	longitude : mapdata.origin.longitude, //-122.081651,
	latitudeDelta : 0.01,
	longitudeDelta : 0.01
}; 

$.mapView.setAnnotations(annotations);