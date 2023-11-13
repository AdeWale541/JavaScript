// Program that splits a string into an array when a space is detected
//2nd program splits an array when a number, space or [non-number, non-alphabet, non-underscore] is detected
const str = "Hello World";
const bySpace = str.split(" ");

console.log(bySpace)

const otherString = "How9are7you okay,today";
const byDigits = otherString.split(/\d|\s|[^\w]/);
console.log(byDigits)