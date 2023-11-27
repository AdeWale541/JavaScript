//   i outside the regex handles change in the letter case. It accounts for both lower and upper case
// | indicates or and accounts for multiple possibilities

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp|fcc/i; 
let result = fccRegex.test(myString);
console.log(result)
console.log(fccRegex.test("FCC"))