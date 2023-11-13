// Program that splits an array when a non-number, non-alphabet, non-underscore, non-space character is detected and joins the array items back with a space

function sentensify(str) {
    // Only change code below this line
  
  return str.split(/[^\w\s]/).join(" ")
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));