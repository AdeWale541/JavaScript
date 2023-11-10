function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
  return anim.slice(beginSlice,endSlice)
    // Only change code above this line
  }
  
  console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3));
  console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 3));