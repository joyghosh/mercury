var Person = function(name){
	this.name = name;
}

Person.prototype.getName = function(){
	return this.name;
}

Person.prototype.setName = function(newName){
	this.name = newName;
}