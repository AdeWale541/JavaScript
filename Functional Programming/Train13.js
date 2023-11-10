//Concatenating 2 arrays without mutating the original array
// replace push command with concat
function nonMutatingConcat(original, attach) {
    // Only change code below this line
  
  return original.concat(attach)
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);