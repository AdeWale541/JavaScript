// Arranges numbers in an array in ascending order

function ascendingOrder(arr) {
    return arr.sort(function(a, z) {  // You can just use arr.sort() and remove the function(paraneter) and it works fine foir both letters and nums
      return a - z;
    });
  }
  
  console.log(ascendingOrder([1, 5, 2,1, 3,9, 4]));

