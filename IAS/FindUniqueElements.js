// A program that takes in 2 arrays and uses filter to select elements of both arrays unique to that array alone
// You can achieve the same answer using indexOf method
function diffArray(arr1, arr2) {
    return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

  /* Long way using for loops
  const newArr = [];
    let confirmNum;
    for (let i=0;i<arr1.length;i++){
        confirmNum = true;
        for(let j=0;j<arr2.length;j++){
          if (arr1[i]===arr2[j]){
              confirmNum= false;
    }
  }
  if(confirmNum == true){     
  newArr.push(arr1[i])  
  }
}
    for (let i=0;i<arr2.length;i++){
        confirmNum = true
        for(let j=0;j<arr1.length;j++){
          if (arr2[i]===arr1[j]){
            confirmNum = false
    }
  }
  if(confirmNum == true){     
    newArr.push(arr2[i])  
    }
  }*/