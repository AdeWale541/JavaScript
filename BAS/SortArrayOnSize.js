function chunkArrayInGroups(arr, size) {
    let newArray=[];
    let splicedArray;
    let numberOfLoops= Math.ceil(arr.length/size);
    for (let i=0;i<numberOfLoops;i++){
        if(arr.length<size) {
        splicedArray=arr
        newArray.push(splicedArray)
     } else{
        splicedArray= arr.splice(0,size);
        newArray.push(splicedArray)
     }
}
  
    return newArray;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));

  /* Alternative solution
  function chunkArrayInGroups(arr, size) {
  const newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
} */