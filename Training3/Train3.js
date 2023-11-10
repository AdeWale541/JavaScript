//advanced recursion
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  //console.log(countup(10));


  function countdown(n) {
    if (n<1) {
      return [];
    } else {
      const countArray = countdown(n-1);
      countArray.unshift(n-1);
      return countArray;
    }
  }
  //console.log(countdown(5));

  function rangeOfNumbers(startNum, endNum) {
    const array =[];
    if(startNum=endNum){
  array.push(startNum);
      return array

    } else{
  
      array= rangeOfNumbers(startNum-1)
      array.push(startNum)
    return array;
  
    }
  }
  console.log(rangeOfNumbers(1,11));