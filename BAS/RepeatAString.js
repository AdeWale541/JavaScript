//Repeat a string a specified number of times
function repeatStringNumTimes(str, num) {
    let newStr=''
     for (let i=0;i<num;i++){
    newStr=newStr+str
     }
     
     return newStr;
   }
   
   repeatStringNumTimes("abc", 3);