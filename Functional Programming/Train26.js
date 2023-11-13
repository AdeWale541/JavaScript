//Program to use currying to perform repeated actions
// currying restructures a function that takes n arguments into n functions that take 1 argument each

/* Normal way*/ function unCurried(x, y) {
    return x + y;
  }
  
  /* Currying way*/function curried(x) {
    return function(y) {
      return x + y;
    }
  }
  
 // Easier way to write functions using theCurrying way
 const curry = x => y => x + y 

  //UnCurried, curried and curry are all functions that return the same answer
  
  console.log(curry(1)(5))

  // Another way of using currying
  const funcForY = curried(1);
console.log(funcForY(2)); // 3