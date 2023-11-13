// Program that takes in 2 arguments(an initial array and an undefined number of test elements) and proceeds to delete all test elements from the initial array
// ... extra is used to indicate and undefined number of arguments
//   for( const arg of extra){} is used to iterate through all elements of the undefined number of arguments
function destroyer(arr, ...extra){


    for( const arg of extra){
        while(arr.indexOf(arg)>-1){              // WHile loop stops the program from failing when 2 adjacent values are meant to be deleted 
        arr.forEach(function(item, index) {
            if (item === arg) {
             arr.splice(index,1);
            }
        })
        }
    }
    
return arr
}

// Easier way to implement the function above
function destroyer2(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer2([3, 5, 1, 2, 2], 2, 3, 5));

