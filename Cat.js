function Cat(name){
	this.name = name;
	this.stomach = [];
}
var Mouse = require('./Mouse');
Cat.prototype.eat = function(animal){
	if(animal instanceof Mouse){
		console.log("thien dep trai")
		console.log("thien love dog")
		console.log("thien love dung")
		console.log("thien love family")
		this.stomach.push(animal);
	}else{
		throw new Error('Cat can eat only mouse!');
	
}

