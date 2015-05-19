// app js file
console.log("** app.js **")
define(function(require){
	// this syntax will load the alerter module synchronously
	var appender = require('module/appender'); 

	var button = document.createElement('button');
	button.id = "clickMe";
	button.innerHTML = "click me!"

	appender(button);

	button.addEventListener('click', function(){
		// this syntax lazy-loads the module (asynchronous)
		var alerter = require(['module/alerter'], function(alerter){
			alerter("Hello little Jerry!");
		});
	});
});

