// Prototype
// creating object instance

function Bird(name) {
    this.name = name;
  }
  Bird.prototype.numLegs = 2;

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;

  let duck = new Bird("Donald");
  let canary = new Bird("Tweety");
  let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
    if(duck.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }
  console.log(duck);
  console.log(ownProps);
  console.log(prototypeProps);

  function joinDogFraternity(candidate) {

    return candidate.constructor ===Dog //candidate["constructor"]
    // This is an alternative way of checking instanceof but instanceof is still better as this can be modified
    }

    console.log(joinDogFraternity(beagle));
    console.log(joinDogFraternity(duck));