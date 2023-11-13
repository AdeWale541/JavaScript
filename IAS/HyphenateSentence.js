// Program that changes all space, punctuation or capital letters into separators and returns lower case characters
function spinalCase(str) {
    return str.split("")
    .map(element=>{
    if(element.toUpperCase()===element){
        return " " + element.toLowerCase();
    }else{
        return element
    }})
    .join("")
    .toLowerCase()
    .trim()
    .split(/[^a-zA-Z0-9]+/)
    .join("-");
  }
  // Easier method

  function spinalCase2(str) {
  return str
    .split(/(?=[\s])|_|(?=[A-Z])/)// (?=[A-Z])--- Look ahead allows you to split at a particular character while also keeping that character in the array that was split
   // .join("-")
    //.toLowerCase();
}

    console.log(spinalCase2('This Is ASpinalTap'));
  //console.log(spinalCase('ThisIsSpinalTap'));