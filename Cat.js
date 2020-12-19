function Cat(name){
	this.name = name;
	this.stomach = [];
}
var Mouse = require('./Mouse');
Cat.prototype.eat = function(animal){
	if(animal instanceof Mouse){
		console.log("thien dep trai")
		this.stomach.push(animal);
	}else{
		throw new Error('Cat can eat only mouse!');
	}
}

module.exports = Cat;
