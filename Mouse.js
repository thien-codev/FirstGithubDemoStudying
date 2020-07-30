function Mouse(name){
	this.name = name;
	this.alive = true;
}

Mouse.prototype.dead = function(){
	this.alive = false;
}

module.exports = Mouse;