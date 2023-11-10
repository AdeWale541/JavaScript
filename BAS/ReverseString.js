function reverseString(str) {

    let revStr="";
    for (let i=0;i<str.length;i++){
        revStr= revStr + str[str.length-1-i]
     } 
    return revStr;
  }
  console.log(reverseString("hello"));

  /* Alternative method
  function reverseString(str) {
  return str
    .split("")     //Note: Split divides the array each time the string in the bracket is observed.
                   // The string is not counted
    .reverse()
    .join("");
}
  */