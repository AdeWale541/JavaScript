// Basic Data Structures
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length); //7
simpleArray[1]= 3;  

console.log(simpleArray); //[ 'one', 3, 'three', true, false, undefined, null ]

const romanNumerals = ['XXI', 'XXII'];
let romanAddition= [18,'XIX', 'XX'];
romanNumerals.unshift(romanAddition[0],romanAddition[1],romanAddition[2]);
romanNumerals.push("XXIII",24)
console.log(romanNumerals); //[ 18, 'XIX', 'XX', 'XXI', 'XXII', 'XXIII', 24 ]


romanNumerals.pop()  //removes last value
romanNumerals.shift() // removes first value

console.log(romanNumerals); // [ 'XIX', 'XX', 'XXI', 'XXII', 'XXIII' ]
romanNumerals.push(24,"25");
console.log(romanNumerals); // ['XIX','XX','XXI','XXII','XXIII', 24,'25']

let count= romanNumerals.length;
const spliceArray= romanNumerals.splice(count-2,2,'XXIV','XXV','XXVI');
// removing elements and setting them as an array and adding another element

console.log(romanNumerals);// ['XIX','XX','XXI','XXII','XXIII', 'XXIV','XXV','XXVI']
console.log(spliceArray);//[ 24, '25' ]

const sliceArray= spliceArray.slice(0,1);
console.log(`sliced array is  ${sliceArray}`);// sliced array is  24
console.log(`spliced array is ${spliceArray}`);// spliced array is 24,25
//copying elements from an existing array into a new array

const updatedRomanNumerals= ['XVII','XVIII',...romanNumerals,'XXVII'];// ... is for copying an array
console.log(updatedRomanNumerals);// ['XVII',  'XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII']