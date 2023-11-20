// PROGRAM TO flatten an array without using the .flat() command
// Array.isArray is used to check if an item is an array
//

function steamrollArray(val,flatArr=[]) {
    val.forEach(item => {
      if (Array.isArray(item)) steamrollArray(item, flatArr);
      else flatArr.push(item);
    });
    return flatArr;
  }