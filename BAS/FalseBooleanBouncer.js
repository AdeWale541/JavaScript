function bouncer(arr) {
    let newArr=[];
    for(let i=0; i<arr.length;i++){
      if (arr[i] != false && arr[i] != null && arr[i] != 0 && arr[i] != "" && arr[i] != undefined && arr[i]=== arr[i]){
  newArr.push(arr[i]);
      }
  
    }
    return newArr;
  }
  
  console.log(bouncer([false, null, 0, NaN, undefined, ""]));