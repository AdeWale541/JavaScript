//Splitting a string after it exceeds a certain number of characters
function truncateString(str, num) {
    let newStr="";
    if(str.length>num){
  for(let i=0;i<num;i++){
  newStr= newStr+ str[i];
  }
  newStr= newStr + '...'
  
  }else{
  
    newStr= str;
  }
    
    return newStr;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);