//Using slice to replace splice
// non-mutable splice
//Limits tha raay to 3 using slice instead of splice
function nonMutatingSplice(cities) {

    return cities.slice(0,3);
  }