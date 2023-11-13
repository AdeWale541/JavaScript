//Program that splits a string into an array at the point where it's a punctuation or space
//    /\W/-- Identifies non-numbers,non-letters and non underscore characters(/[^A-Za-z0-9_]/)
function splitify(str) {
    // Only change code below this line
  
  return str.split(/\W/)
    // Only change code above this line
  }
  
  console.log(splitify("Hello World,I-am code"));