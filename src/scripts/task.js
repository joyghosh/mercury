var Task = function(id, isFuture){
	this.id = typeof id !== 'undefined' ? id : "default-id";
	this.id = typeof isFuture !== 'undefined' ? isFuture : false;
}

Task.prototype.execute = function(){
	//Override this section in base class.
}