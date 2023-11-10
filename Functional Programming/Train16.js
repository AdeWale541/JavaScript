// function to filter numbers in an array such that only the square of positive integers in the original array are returned in the new array
const squareList = arr => {
    // Only change code below this line
  
  
   let newArray= arr.filter(num=> Math.sign(num)===1 && num===Math.floor(num))// math.sign checks for positive/negative while .math.floor rounds to the nearest integer
        .map(num=>Math.pow(num,2))
    return newArray;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
