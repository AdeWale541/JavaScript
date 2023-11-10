function mutation(arr) {
    arr[1]= arr[1].toLowerCase();
  let wordOne=arr[0].toLowerCase().split("");
  let  status;
  for (let i=0;i<arr[1].length; i++){
  if(wordOne.indexOf(arr[1][i])<0) return false;
  }
    return true;
  
  }
  
  console.log(mutation(["hello", "Hello"]));