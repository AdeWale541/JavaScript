// .test finds the regex expression in the string and returns true or false
// cases matter in regex k is not K

let myString = "Hello, World!";
let myRegex = /Hello/;
let myString2 = "hello, World!";
let result = myRegex.test(myString);
console.log(result) //true
console.log(myRegex.test(myString2))//false