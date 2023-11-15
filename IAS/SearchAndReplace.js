// Program to replace a word(2nd argument) in the initial argument with the 3rd argument
// case of the initial word must be maintained
// Substring(1) returns the character at the specified index till the end of the string
// Substring(1,4) returns the character at the specified index till specified last index but doesn't capture the character at the last index

function myReplace(str, before, after) {
    // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
    if (/^[A-Z]/.test(before)) {
      after = after[0].toUpperCase() + after.substring(1)
    } else {
      after = after[0].toLowerCase() + after.substring(1)
    }
  
    // return string with argument "before" replaced by argument "after" (with correct case)
    return str.replace(before, after);
  }
  
  // test here
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  