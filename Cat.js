var chalk = require("chalk");
function Cat()
{
    this.stomach = [];
}

Cat.prototype.sayHi = function(){
    console.log("Hi i am a cat. My name is " + chalk.blue("Tom"));
}

module.exports = Cat;