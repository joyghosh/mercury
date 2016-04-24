//Base class.
var Queue = function(size){
	this.size = typeof size !== 'undefined' ? size : 5;		//Set task-pool size to default value.
	this.array = new Array();											//Initialize an empty array.
}

//Queue push operation.
Queue.prototype.push = function(object){
	if(this.array.length < this.size){
		return this.array.push(object);
	}else{
	 	throw new Error("queue overflow.");
	}
}

//Queue pop operation
Queue.prototype.remove = function(){
	if(this.array.length > 0){
		return this.array.shift();
	}else{
	 	throw new Error("queue underflow.");
	}
}

//Child class of Queue.
function FixedPool(name, size){
	Queue.call(this, size);
	this.name = name;
}

FixedPool.prototype = Object.create(Queue.prototype);

FixedPool.prototype.constructor = FixedPool;

FixedPool.prototype.submit = function(task){
	try{
		return this.push(task);
	}catch(err){
		console.log(err.message);
		throw(err);
	}
}

FixedPool.prototype.pop = function(){
	try{
		return this.remove();
	}catch(err){
		console.log(err.message);
		throw(err);
	}
}