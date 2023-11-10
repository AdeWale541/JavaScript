function findElement(arr, func) {
    let response;
    for(let i=0;i<arr.length;i++){
        if (func(arr[i])){
          response=arr[i];
            break;
            } else{
            response=undefined;
            }
    }
    
      return response;
    }
    
    console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));