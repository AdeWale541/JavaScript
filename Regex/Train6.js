//    /\w/-- Identifies all numbers,letters and underscore characters(/[A-Za-z0-9_]/)
//    /\W/-- Identifies non-numbers,non-letters and non underscore characters(/[^A-Za-z0-9_]/)  opposite of /\w/
//    /\s/-- Identifies all whitespace characters             /\S/  does the opposite
//    /\w|\s/-- The | (OR bar) helps identify 2 different types of identifiers



let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/gi;
let result= testStr.match(ourRegex);
console.log(testStr.match(result));