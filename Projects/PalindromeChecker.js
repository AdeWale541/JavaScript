// Program that removes all non alpha-numeric characters and says if string is a palindrome

function palindrome(str) {
    let newStrArr= str.toLowerCase().split(/[^A-Za-z0-9]/).join("").split("");
  
    for(let i=0;i<Math.ceil(newStrArr.length/2);i++){
  
  if (newStrArr[i] !== newStrArr[(newStrArr.length-1 -i)]){
  return false
  }
    }
    return true;
  }
  
  console.log(palindrome("_eyer"));