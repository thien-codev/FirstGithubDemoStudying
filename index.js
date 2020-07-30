var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Mug');
dog.sayHi();

var mouse = new Mouse('Jerry');

var cat = new Cat('Tom');

cat.eat(mouse);
mouse.dead();
dog.eat(cat);
console.log(mouse);
console.log(cat);
console.log(dog);


