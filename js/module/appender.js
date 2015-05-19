// appender file
console.log("** appender.js **");

define(function(){
	return function(itemToAppend, type){
		
		if (type === 'text') {
			itemToAppend = document.createTextNode(itemToAppend);
		}
		document.body.appendChild(itemToAppend);
		console.log("appended!");
	}
});
