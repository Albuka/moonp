// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

/*
 * Check IOS platform
 */
Alloy.Globals.isIOS7 = function() {
	var version = Titanium.Platform.version.split(".");
	return version[0];
};
/*
 * Set Display pixel variable for android (in ios it will be 1)
 */
if (Titanium.Platform.Android) {
	Alloy.Globals.dp = (Ti.Platform.displayCaps.dpi / 160);
} else {
	Alloy.Globals.dp = 1;
}

Alloy.Globals.menuVisible = false;
/*
 * Data sources urls
 */
Alloy.Globals.URLS = {
	//news_url : 'http://rcapublicidade.com.br/deliverysa_app/consome_json.php',
	//products_url : 'http://rcapublicidade.com.br/deliverysa_app/consome_json.php'
	news_url : 'http://moonp.com.br/app/json/news.json',
	products_url : 'http://moonp.com.br/app/json/products.json'
	//news_url : 'http://skounis.s3.amazonaws.com/mobile-apps/barebone/news.json',
	//products_url : 'http://skounis.s3.amazonaws.com/mobile-apps/barebone/products.json'
};
/*
 * Controller Stack for Android only
 */
Alloy.Globals.navWindows = [];
/*
 * Loads the map module
 * which can be referenced by Alloy.Globals.Map
 */

if (OS_IOS || OS_ANDROID) {
	Ti.Map = require('ti.map');
}

Alloy.Globals.animations = {
	left : {
		left : 275,
		curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration : 200
	},
	right : {
		left : 0,
		curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration : 200
	},

	slide_out_top : Titanium.UI.createAnimation({
		top : (Ti.Platform.Android) ? '-320dp' : -320
	}),

	slide_in_top : Titanium.UI.createAnimation({
		top : (Ti.Platform.Android) ? '48dp' : 0
	})
};

Alloy.Globals.ThemeStyles = {
	navTintColor : '#fff',
	//
	// Windows / Views
	//
	win : {
		backgroundImage: 'fundo.jpg',
		backgroundColor : '#c9d0da',
		// barColor : (Alloy.Globals.isIOS7() == "7") ? '#464646' : '#455162',
		barColor : '#c9d0da',
		separatorColor : '#343434',
		navTintColor : '#fff'
	},
	//
	// Flyout Menu (left menu)
	//
	flyout_menu : {
		backgroundColor : '#9eabb9'
	},

	flyout_menu_item : {
		font : {
			fontSize : '18dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		},
		rowHeight : 60 * Alloy.Globals.dp,
		selectedBackgroundColor : '#5e6c8c',
		verticalDividerColor : '#a1a1a1',
		rowSeparatorColor : '#a1a1a1',
	},
	//
	// Right menu
	//
	right_menu : {
		color : '#656565',
		backgroundColor : '#9eabb9',
		selectedBackgroundColor : '#5e6c8c',
		rowSeparatorColor : '#a1a1a1',
		font : {
			fontSize : '18dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		},
		width : 175,
		rowHeight : 48
	},

	//
	// Home (eg: Home view)
	//
	home_logo : {
		color : '#ffffff',
		font : {
			fontSize : '18dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},
	
	home_button : {
		color : '#ffffff',
		backgroundColor : '#579aa9',
		selectedBackgroundColor : '#a1a1a1',
		font : {
			fontSize : '18dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	feed_table_row : {
		imageWidth : '96dp',
		backgroundColor : 'transparent',
		selectedBackgroundColor : '#a1a1a1',
	},

	feed_table_row_teaser : {
		font : {
			fontSize : '14dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		},
		color : '#455162'
	},

	feed_table_row_title : {
		color : '#000000',
		font : {
			fontSize : '15dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	feed_table_row_tags : {
		color : '#4f4f4f',
		font : {
			fontSize : '11dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	//
	// Products (eg: Products view)
	//
	products_table : {

	},

	products_table_row : {
		imageWidth : '402.2dp',//139 * Alloy.Globals.dp,
		imageHeight : '139dp'
	},

	products_table_tile : {
		backgroundColor : '#c9d0da',
		selectedBackgroundColor : '#5e798c',
	},
	//
	// Product (eg: Product view)
	//
	product : {

	},

	product_slider : {
		height : '180dp'
	},

	//
	// Details (eg: NewsDetail view)
	//
	detail_title : {
		color : '#ffffff',
		font : {
			fontSize : '28dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},
	detail_tags : {
		color : '#4f4f4f',
		font : {
			fontSize : '13dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	detail_body : {
		color : '#000000',
		font : {
			fontSize : '15dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},
	//
	// Widgets (textfields, buttons etc eg: Contact view)
	//
	textfield : {
		color : '#ffffff',
		placeholderColor : '#656565',
		borderColor : '#2e2e2e',
		height : '55dp',
		font : {
			fontSize : '18dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	textarea : {
		color : '#ffffff',
		placeholderColor : '#656565',
		borderColor : '#2e2e2e',
		height : '143dp',
		font : {
			fontSize : '18dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	lableProgress : {
		color : '#fff',
		font : {
			fontSize : '14dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	button_bar : {
		backgroundColor : '#447d89',
		font : {
			fontSize : 16,
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	tabbed_bar : {
		backgroundColor : '#775068',
		font : {
			fontSize : 16,
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	button : {
		color : '#ffffff',
		backgroundColor : '#579aa9',
		selectedBackgroundColor : '#8c5e7a',
		height : '55dp',
		font : {
			fontSize : '18dp',
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	}

};

Alloy.Globals.MapData = {
	origin : {
		latitude : 37.407,
		longitude : -122.1
	},
	annotations : [{
		picture : "http://lorempixel.com/100/76/",
		title : "eros",
		subtitle : "Molestie et wisi.",
		body : "Lobortis elit lobortis illum accumsan nibh, et facilisis eros zzril lorem, dignissim autem erat feugait. Delenit, ut illum.",
		latitude : 37.405,
		longitude : -122.1
	}, {
		picture : "http://lorempixel.com/100/76/",
		title : "Ullamcorper eros.",
		subtitle : "Ex consequat.",
		body : "Volutpat ex diam elit facilisi feugait, et odio qui aliquip.",
		latitude : 37.41,
		longitude : -122.1
	}]
};

Alloy.Globals.FlyoutMenu = [{
	title : 'MAIN MENU',
	name : '_main_menu',
	controller : '',
	color : '#f6f6f6',
	icon : '/images/ic_menu.png',
	iconAndroid : '/images/ic_menu.png',
	rowBackgroundColor : '#292929',
	isHeader : true
}, {
	title : 'Home',
	name : '_home',
	controller : (Ti.Platform.Android) ? 'adrHome' : 'Home',
	color : '#656565',
	icon : '/images/ic_home.png',
	iconAndroid : '/images/ic_home.png',
	rowBackgroundColor : '#292929'
}, {
	title : 'News',
	name : '_news',
	controller : (Titanium.Platform.Android) ? 'adrNews' : 'News',
	color : '#656565',
	icon : '/images/ic_news.png',
	iconAndroid : '/images/ic_news.png',
	rowBackgroundColor : '#292929'
}, {
	title : 'Products',
	name : '_products',
	controller : (Titanium.Platform.Android) ? 'adrProducts' : 'Products',
	color : '#656565',
	icon : '/images/ic_products.png',
	iconAndroid : '/images/ic_products.png',
	rowBackgroundColor : '#292929'
}, {
	title : 'Map',
	name : '_map',
	controller : (Titanium.Platform.Android) ? 'adrMap' : 'Map',
	color : '#656565',
	icon : '/images/ic_map.png',
	iconAndroid : '/images/ic_map.png',
	rowBackgroundColor : '#292929'
}, {
	title : 'Contact',
	name : '_contact',
	controller : (Titanium.Platform.Android) ? 'adrContact' : 'Contact',
	color : '#656565',
	icon : '/images/ic_contact.png',
	iconAndroid : '/images/ic_contact.png',
	rowBackgroundColor : '#292929'
}, {
	title : 'Elements',
	name : '_elements',
	controller : (Ti.Platform.Android) ? 'adrElements' : 'Elements',
	color : '#656565',
	icon : '/images/ic_elements.png',
	iconAndroid : '/images/ic_elements.png',
	rowBackgroundColor : '#292929'
}, {
	title : 'More Options',
	name : '_options',
	controller : '',
	color : '#ffffff',
	icon : '/images/ic_more_option.png',
	iconAndroid : '/images/ic_more_option.png',
	rowBackgroundColor : '#8c5e7a',
	isHeader : true
}, {
	title : 'Products Views',
	name : '_products',
	controller : (Titanium.Platform.Android) ? 'adrProductsView' : 'Products',
	color : '#656565',
	icon : '/images/ic_products.png',
	iconAndroid : '/images/ic_products.png',
	rowBackgroundColor : '#292929'
}, {
	title : 'Settings',
	name : '_setting',
	controller : (Ti.Platform.Android) ? 'adrSetting' : 'Setting',
	color : '#656565',
	icon : '/images/ic_settings.png',
	iconAndroid : '/images/ic_settings.png',
	rowBackgroundColor : '#292929'
}];

Alloy.Globals.rightMenuItems = [{
	title : 'Menu Item 1',
	color : '#656565'
}, {
	title : 'Menu Item 2',
	color : '#656565'
}, {
	title : 'More Options',
	color : '#656565'
}, {
	title : 'Settings',
	color : '#656565'
}];
