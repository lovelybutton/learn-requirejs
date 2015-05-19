// main js file
// Use this file to set up dependencies
console.log("** main.js **");

// require(["app"], function(app){});

// Load modules and use them
// http://www.ringabell.org/en/un-simple-guide-pour-debuter-avec-requirejs/
// The require() function takes two arguments: 
// an array of dependencies and a callback function to execute once all the dependencies are loaded.
require(['module/appender', 'module/data'], function(appender, dataModule){
    // do something with the loaded modules

    var button = document.createElement('button');
	button.id = "clickMe";
	button.innerHTML = "click me!"

	appender(button, 'element');

	button.addEventListener('click', function(){
		// this syntax lazy-loads the module (asynchronous)
		var alerter = require(['module/alerter'], function(alerter){
			alerter("Hello little Jerry!");
		});
	});

	appender(dataModule.test, 'text');
});


// require.config({
//     paths: {
//         'jQuery': 'vendor/jquery/jquery',
//         'underscore': 'vendor/underscore/underscore'
//     },
//     shim: {
//         'jQuery': {
//             exports: '$'
//         },
//         'underscore': {
//             exports: '_'
//         }
//     }
// });
