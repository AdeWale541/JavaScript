// ES6
const bicycle = {
    gear: 2,
    setGear (newGear) {
      this.gear = newGear;
    }
  };

  /* ES5
const bicycle = {
    gear: 2,
    setGear (newGear) {
      this.gear = newGear;
    }
  };*/
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);