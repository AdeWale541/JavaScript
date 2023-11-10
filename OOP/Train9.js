function Bird() {
    let hatchedEgg = 10;
  //In JavaScript, a function always has access to the context in which it was created. This is called closure.
    this.getHatchedEggCount = function() { //
      return hatchedEgg;
    };
  }
  let ducky = new Bird();
  ducky.getHatchedEggCount();

  //Bird.hatchedEgg= 16;
  //console.log(Bird.hatchedEgg);

