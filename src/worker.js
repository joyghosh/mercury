//Worker template. A worker thread starts on message trigger.
onmessage = function(e){
	console.log(e.data);
	var person = e.data;
	console.log(e.data.name);
	postMessage(person);
}