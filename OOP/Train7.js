//inheritance
function Animal(){  };   // Supertype or Parent type Animal

  Animal.prototype = {  // Prototype being inherited by Bird and Dog sub-class
    constructor: Animal, 
    describe: function() {console.log(`My name is  ${this.name} and I have ${this.numLegs} legs`);},
    eat: function(){console.log(`The ${this.name} wants to eat ${this.food}`);} 
}

   
  
function Bird(name,food, wingType) {  // Constructor Bird
    this.name = name;
    this.food=food;
    this.wingType= wingType
  }

  Bird.prototype = Object.create(Animal.prototype); //let new instance of supertype= Object.create(Animal.prototype);
  Bird.prototype.constructor= Bird;
  Bird.prototype.numLegs= 2;
  Bird.prototype.abilityToFly= function(){if (this.wingType=== "Flight"){return true} else{return false}}
  //Older way
  /*Bird.prototype = {   // Prototype of Bird
    constructor: Bird, // Fixes the constructor property from returning false
    numLegs: 2, 
    eat: function() {console.log(`The ${this.name} wants to eat ${this.food}`);
    }
  };*/
  
  let dove = new Bird("Dove","Millet","Flight") //Bird object with all the methods/properties of Animal and Bird
  console.log(Bird.prototype)
  console.log(dove.eat())
  console.log(dove.abilityToFly())
  console.log(dove.describe())

  let chicken = new Bird("Chicken","Rice","Non-Flight")
  console.log(chicken.eat())
  console.log(chicken.abilityToFly())
  console.log(chicken.describe())
/* Priority order for checking a key/property from an object.
duck => Is eat() defined here? No.
Bird => Is eat() defined here? => Yes. Execute it and stop searching.
Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.
 */

  function Dog(name,food,aggressionLevel){  //Constructor Dog
    this.name= name;
    this.food=food;
    this.aggressionLevel=aggressionLevel
    }

    Dog.prototype=Object.create(Animal.prototype);
    Dog.prototype.constructor= Dog
    Dog.prototype.numLegs= 4
    Dog.prototype.aggressiveBoolean= function(){if(this.aggressionLevel>3){return true} else{return false}}
// old way
   /* Dog.prototype = {    /// Prototype of Dog
        constructor: Dog, // Fixes the constructor property from returning false
        numLegs: 2, 
        eat: function() {
          console.log(`The ${this.name} wants to eat ${this.food}`);
        }
        }
    
    }*/
    
    let beagle= new Dog("Beagle",'Bones',4) //Dog object with all the methods/properties of Animal and Bird
    console.log(Dog.prototype)
    console.log(beagle.eat())
    console.log(beagle.describe())
    console.log(beagle.aggressiveBoolean())