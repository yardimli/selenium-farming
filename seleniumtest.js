var webdriverio = require('webdriverio');
var fs = require('fs');
var gm = require('gm');

var urltoget = process.argv[2];
var filetosave = process.argv[3];
var resolutionN = parseInt(process.argv[4],10);
var  WaitN = parseInt(process.argv[5],10);

var HubIP = '192.168.1.201';

var Resolutions = [
	{width:1920, height:1080 }, //0
	{width:1680, height:1050 }, //1
	{width:1600, height:900 },  //2
	{width:1440, height:900 },  //3
	{width:1366, height:768 },  //4
	{width:1280, height:1024 }, //5
	{width:1280, height:800 },  //6
	{width:1024, height:768 },  //7
	{width:800, height:600 }    //8
];


var ClientIE8 = webdriverio.remote({desiredCapabilities: {browserName: 'internet explorer', version: '8', platform: 'WINDOWS' },	host: HubIP, port: 4444 }).init();

var ClientIE9 = webdriverio.remote({desiredCapabilities: {browserName: 'internet explorer', version: '9', platform: 'WINDOWS' }, host: HubIP, port: 4444}).init();

var ClientIE10 = webdriverio.remote({desiredCapabilities: {browserName: 'internet explorer', version: '10', platform: 'WINDOWS' }, host: HubIP, port: 4444}).init();

var ClientIE11 = webdriverio.remote({desiredCapabilities: {browserName: 'internet explorer', version: '11', platform: 'WINDOWS' }, host: HubIP,	port: 4444}).init();

var ClientFF = webdriverio.remote({desiredCapabilities: {browserName: 'firefox', platform: 'WINDOWS' }, host: HubIP, port: 4444}).init();

var ClientChrome = webdriverio.remote({desiredCapabilities: {browserName: 'chrome', platform: 'WINDOWS' }, host: HubIP, port: 4444}).init();



try {
	ClientIE8.windowHandleSize(Resolutions[resolutionN])
	.url(urltoget).getTitle(function(err, title) { console.log("IE8: " + title);	})
	.pause(WaitN)
	.saveScreenshot('./screens/'+filetosave+'-ie8.png')
	.end();
}
finally {}

try {
	ClientIE9.windowHandleSize(Resolutions[resolutionN])
	.url(urltoget).getTitle(function(err, title) { console.log("IE9: " + title); })
	.pause(WaitN)
	.saveScreenshot('./screens/'+filetosave+'-ie9.png')
	.end();
}
finally {}

try {
	ClientIE10.windowHandleSize(Resolutions[resolutionN])
	.url(urltoget).getTitle(function(err, title) {	console.log("IE10: " + title); })
	.pause(WaitN)
	.saveScreenshot('./screens/'+filetosave+'-ie10.png')
	.end();
}
finally {}


try {
	ClientIE11.windowHandleSize(Resolutions[resolutionN])
	.url(urltoget).getTitle(function(err, title) {	console.log("IE11: " + title); })
	.pause(WaitN)
	.saveScreenshot('./screens/'+filetosave+'-ie11.png')
	.end();
}
finally {}

try {
	ClientFF.windowHandleSize(Resolutions[resolutionN])
	.url(urltoget).getTitle(function(err, title) { console.log("FF: " + title); })
	.pause(WaitN)
	.saveScreenshot('./screens/'+filetosave+'-ff.png')
	.end();
}
finally {}

try {
	ClientChrome.windowHandleSize(Resolutions[resolutionN])
	.url(urltoget).getTitle(function(err, title) { console.log("CHROME: " + title); })
	.pause(WaitN)
	.saveScreenshot('./screens/'+filetosave+'-chrome.png')
	.end();
}
finally {}



//console.log("DONE");
