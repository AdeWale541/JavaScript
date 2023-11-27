// .match returns the actual string that matches the regex expression
// .match returns an array containing the string that matches the regex expression, index, input text and groups

let extractStr = "Extract the word 'codIng' from this string.";
let codingRegex = /CODING/i; 
let result = extractStr.match(codingRegex); 
console.log(result)  /*prints the array[
    'codIng',
    index: 18,
    input: "Extract the word 'codIng' from this string.",
    groups: undefined
  ]*/
console.log(result[0]) // codIng