// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#fff');

// create window
var win=Ti.UI.createWindow({
	left:0,
	right:0,
	top:0,
	bottom:0
});

var navTitle = Ti.UI.createLabel({
	top:70,
	textAlign: 'center',
	color: '#fff',
	font: {
		fontSize: 19,
		fontWeight: 'bold',
	},
	width: 117,
	height: 29,
	backgroundImage:'images/shukranLogo.png'
});
win.add(navTitle);
	
var navTitleView = Ti.UI.createView({
	top:120,
	textAlign: 'center',
	color: '#fff',
	font: {
		fontSize: 19,
		fontWeight: 'bold',
	},
	width: 117,
	height: 29,
	backgroundImage:'images/shukranLogo.png'
});
win.add(navTitleView);

var navTitle1 = Ti.UI.createImageView({
	top:170,
	width: 117,
	height: 29,
	image:'images/shukranLogo.png'
});
win.add(navTitle1);

var navTitle2 = Ti.UI.createLabel({
	top:220,
	width: 117,
	height: 29,
	backgroundImage:'images/shukranLogo.png'
});
win.add(navTitle2);

win.open();
