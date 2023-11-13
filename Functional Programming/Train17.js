// Arranges numbers in an array in ascending order
//.sort -- sorts alphabets and strings correctly. Sorts numbers likes stirngs such that 11 comes before 4
//.sort(compareFunction)-- sorts numbers in numerical order. Does not do the same for strings
function ascendingOrder(arr) {
    return arr.sort(function(a, z) {  // You can just use arr.sort() and remove the function(paraneter) and it works fine for both letters and nums
      return a - z;
    });
  }
  
  console.log(ascendingOrder([1, 5, 2,1, 3,9, 4,11]));

