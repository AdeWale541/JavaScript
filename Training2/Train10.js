//Generating random numbers

function randomWholeNum() {
    return Math.floor(Math.random()*10);
  }

  // math.floor= round down to lowest whole number
  //math.random()= generate ranom decimal between 0(Inclusive) and 1(Exclusive)


  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }
  // To specify the maximum and minimum numbers you want