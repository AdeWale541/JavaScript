function frankenSplice(arr1, arr2, n) {
let newArr2=[...arr2];
   let removedArray= newArr2.splice(n,arr2.length-n);
      for(let i=0;i<arr1.length;i++){
    
        newArr2.push(arr1[i]);
    
      }
      newArr2.push(...removedArray)
      return newArr2;
    }
    
    console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));