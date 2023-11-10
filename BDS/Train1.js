// Basic Data Structures
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
simpleArray[1]= 3;

console.log(simpleArray);

const romanNumerals = ['XXI', 'XXII'];
let romanAddition= [18,'XIX', 'XX'];
romanNumerals.unshift(romanAddition[0],romanAddition[1],romanAddition[2]);
romanNumerals.push("XXIII",24)
console.log(romanNumerals);


romanNumerals.pop()  //removes last value
romanNumerals.shift() // removes first value

console.log(romanNumerals);
romanNumerals.push(24,"25");
console.log(romanNumerals);

let count= romanNumerals.length;
const spliceArray= romanNumerals.splice(count-2,2,'XXIV','XXV','XXVI');
// removing elements and setting them as an array and adding another element

console.log(romanNumerals);
console.log(spliceArray);

const sliceArray= spliceArray.slice(0,1);
console.log(`sliced array is  ${sliceArray}`);
console.log(`spliced array is ${spliceArray}`);
//copying elements from an existing array into a new array

const updatedRomanNumerals= ['XVII','XVIII',...romanNumerals,'XXVII'];// ... is for copying an array
console.log(updatedRomanNumerals);