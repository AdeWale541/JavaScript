// Turn Prototype into new object

function Bird(name,food) {
    this.name = name;
    this.food=food;
  }

Bird.prototype = {
    constructor: Bird, // Fixes the constructor property from returning false
    numLegs: 2, 
    eat: function() {
      console.log(`The bird wants to eat ${this.food}`);
    },
    describe: function() {
      console.log(`My name is  ${this.name} and I have ${this.numLegs} legs`);
    }
  };

  let dove = new Bird('Dove','Bird feed')
  console.log(dove.describe());
  console.log(dove.eat())
 console.log(Bird.prototype.isPrototypeOf(dove));
 console.log(Object.prototype.isPrototypeOf(Bird.prototype)); // Object .prototype is a prototype to all other prototypes. It's a prototype chain
console.log(dove.constructor===Bird);/// Returns false due to prototype being set as an object. 
//constructor would need to be set as a property inside the prototype
let ownProps = [];
let prototypeProps = [];

  for (let property in dove) {
    if(dove.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }
  console.log(ownProps);
  console.log(prototypeProps);