//Confirm the last letters of a string matches the target string
function confirmEnding(str, target) {
    let newStr=""
    for (let i=0; i<target.length;i++){
      newStr= newStr+str[str.length-target.length+i]
    }
    return newStr===target;  // return str.slice(str.length - target.length) ===target   //Also works
  }
  
  confirmEnding("Bastian", "n");