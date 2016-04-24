//Global data-structures.
var lang_unicodes = new Array();
var counts = new Array();

function detect(){

	init();
	
	var characters = [];
	
	//Extract text from title.
	var title = document.title;
	characters = characters.concat(title.split(""));

	//Extract text from body.
	var nodes = document.body.childNodes;
	for(var i=0; i<nodes.length; i++){
		if(nodes[i].nodeName == "P"){
			//console.log(nodes[i].nodeValue);
			characters = characters.concat((nodes[i].innerHTML).split(""));
		}
	}

	//verify character array.
	//console.log(characters);

	//Detect script for each character.
	characters.forEach(detectLanguage);

	//Display output.
	console.log(counts);
}

function init(){
	//Load the language dictionary.
	loadDictionary();

	counts["english"] = 0;
	counts["french"] = 0;
	counts["others"] = 0;
}

function detectLanguage(data){
	//console.log(data);
	//console.log(typeof data.charCodeAt(0).toString(16));
	//console.log((data.charCodeAt(0)).toString(16));
	// for(k in lang_unicodes){
	// 	console.log(lang_unicodes[k]);
	// 	// var code = (data.charCodeAt(0)).toString(16);
	// 	// if($.inArray(code, lang_unicodes[k]) != -1){
	// 	// 	console.log(k);
	// 	// 	// if($.inArray(k, counts) != -1){
	// 	// 	// 	counts[k] = 1;
	// 	// 	// }else{
	// 	// 	// 	++counts[k];
	// 	// 	// }
	// 	// }else{
	// 	// 	console.log("not found "+code);
	// 	// }
	// }

	for(k in lang_unicodes){
	   var code = data.charCodeAt(0).toString(16);
	   if($.inArray(code, lang_unicodes[k])!= -1){
				++counts[k];
	   }else{
	      ++counts["others"];
	   }
	}
	// var code = data.charCodeAt(0).toString(16);
	// // console.log(typeof code);
	// if($.inArray(code, lang_unicodes['english']) != -1){
	// 	console.log("english");
	// }else if ($.inArray(code, lang_unicodes["french"]) != -1){
	// 	console.log("french");
	// }else{
	// 	console.log("others");
	// }
}

// for(k in lang_unicodes){
//   console.log(lang_unicodes[k]);
//   var code = ("e".charCodeAt(0)).toString(16);
//   if($.inArray(code, lang_unicodes[k])!= -1){
//      console.log("Found");
//   }else{
//      console.log("Not Found");
//   }
// }

// function lookUpCode(code){
// 	return  == 
// }

function loadDictionary(){
	$.getJSON("i18n.json", function(data){
		$.each(data, function(key, value){
			lang_unicodes[key] = value;
		});

		// console.log(lang_unicodes["english"]);
	});
}