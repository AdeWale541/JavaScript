// Program that uses the some method to check if any element in an array is positive
function checkPositive(arr) {
    // Only change code below this line
  
  return arr.some(function(currentValue) {
    return currentValue > 0;
  });
    // Only change code above this line
  }
  
  console.log(checkPositive([-1, -2, -3, -4, 5]));