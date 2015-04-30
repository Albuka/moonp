var args = arguments[0] || {};

var that = this;
this.isMenuShown = false;

$.winHome.addEventListener('open', function(e) {
	Ti.API.info('Home Controller is Opened: ');
	// set title control
	$.winHome.setTitleControl(Alloy.createController('titleControl', {
		title : args.title
	}).getView());
	// set left menu button
	$.winHome.leftNavButton = Alloy.createController('leftMenuButton').getView();
	// set right menu button
	$.Right_Menu = Alloy.createController('RightMenu', {
		context : that
	}).getView();
	$.winHome.add($.Right_Menu);

	$.winHome.rightNavButton = Alloy.createController('rightMenuButton', {
		Right_Menu : $.Right_Menu,
		context : that
	}).getView();
	
	//
	// Logo View height 
	//
	Ti.API.info('Home:: Logo row height is : ' + $.logoView.toImage().height);
	$.logoRow.height = $.logoView.toImage().height + 10 * Alloy.Globals.dp;
	Ti.API.info('..............adjusted to : ' + $.logoRow.height);
		
	//
	// News
	//
	var btn_news = Alloy.createController('customHomeButton', {
		image : '/images/home-news.png',
		title : 'Tá bombando',
		left : 14
	}).getView();

	btn_news.addEventListener('click', function(e) {
		var controller = Alloy.createController('News', {
			title : 'Tá bombando',
			isFlyout : false
		});
		var News = controller.getView();
		Alloy.Globals.navGroup.openWindow(News, {
			animated : true
		});
		Alloy.Globals.navGroup.window = News;
	});

	$.btnView.add(btn_news);

	//
	// Products
	//
	var btn_products = Alloy.createController('customHomeButton', {
		image : '/images/home-products.png',
		title : 'Festas',
		right : 14
	}).getView();

	btn_products.addEventListener('click', function(e) {
		var controller = Alloy.createController('Products', {
			title : 'Festas',
			isFlyout : false
		});
		var Products = controller.getView();
		Alloy.Globals.navGroup.openWindow(Products, {
			animated : true
		});
		Alloy.Globals.navGroup.window = Products;
	});

	$.btnView.add(btn_products);

	//
	// Map
	//
	var btn_map = Alloy.createController('customHomeButton', {
		image : '/images/home-map.png',
		title : 'Mapa',
		left : 14
	}).getView();

	btn_map.addEventListener('click', function(e) {
		var controller = Alloy.createController('Map', {
			title : 'Mapa',
			isFlyout : false
		});
		var Map = controller.getView();
		Alloy.Globals.navGroup.openWindow(Map, {
			animated : true
		});
		Alloy.Globals.navGroup.window = Map;
	});

	$.btnView2.add(btn_map);
	//
	// Elements
	//
	var btn_elements = Alloy.createController('customHomeButton', {
		image : '/images/home-elements.png',
		title : 'Add evento',
		right : 14
	}).getView();

	btn_elements.addEventListener('click', function(e) {
		var controller = Alloy.createController('Elements', {
			title : 'Add evento',
			isFlyout : false
		});
		var Elements = controller.getView();
		Alloy.Globals.navGroup.openWindow(Elements, {
			animated : true
		});
		Alloy.Globals.navGroup.window = Elements;
	});

	$.btnView2.add(btn_elements);

});
