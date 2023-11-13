// Program that uses the every method to check if every element in an array is positive
function checkPositive(arr) {
    // Only change code below this line
  
  return arr.every(function(currentValue) {
      return currentValue > 0;
  })
    // Only change code above this line
  }
  
  console.log(checkPositive([1, 2, -3, 4, 5]));