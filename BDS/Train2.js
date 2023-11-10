function quickCheck(arr, elem) {  
    //indexOf is to check whether an element exists in an array. If it exists, it returns the element position, else it returns -1
  if (arr.indexOf(elem)>=0){
  return true
  }else {
  return false
  }
  ;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'squash'));