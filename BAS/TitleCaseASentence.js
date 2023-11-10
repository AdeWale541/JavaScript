function titleCase(str) {
    str=str.toUpperCase()
    let strArray= str.split("");

    for(let i=1;i<str.length;i++){
  
         if(str[i-1]!=" ") {
        strArray[i]= strArray[i].toLowerCase();
        }  else{  }
  
    }
    return strArray.join("");
  }
  
  console.log(titleCase("i'm a little tea pot"));
  
 /* let fry="READ ME"
  let fryArray=fry.split("")
  console.log(fryArray);s
  fryArray[0]=fryArray[0].toLowerCase()
  console.log(fryArray.join(""));*/