class Task{
	
	constructor(worker_script, isShared=false){
		this.script = worker_script;
		this.shared =  isShared;
	}

	//execute method for task excution.
	function execute(){

	}

	function getScript(){
		return this.script;
	}

	function isShared(){
		return this.shared;
	}
}