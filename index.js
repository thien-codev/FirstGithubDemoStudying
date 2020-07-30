var Dog = require('./Dog');
var Cat = require('./Cat');

var dog = new Dog('Mug');
dog.sayHi();

var cat = new Cat('Tom');

dog.eat(cat);
console.log(dog);

