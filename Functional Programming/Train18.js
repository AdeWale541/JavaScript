// reverses the array from lowest to highest for both alphabets and numbers

function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1;
    });
  }
  
  console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']));