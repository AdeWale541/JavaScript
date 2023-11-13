//Using slice to replace splice
// non-mutable splice
//Limits tha array to 3 using slice instead of splice
function nonMutatingSplice(cities) {

    return cities.slice(0,3);
  }

  console.log(nonMutatingSplice([1,2,3,4,5,6,7,8,9,0,10]))
