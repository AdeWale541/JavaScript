// Program that takes an unspecified number of arrays and filters it such that each number in the final array appears once
// .flat() command is used to flatten arrays of a specified depth i.e, it removes all sub-arrays inside an array
//.flat() works for depth 1, .flat(2) works on depth 2 and .flat(Infinity) works on all depths
// [...arguments] takes in an unspecifed number of arguments

function uniteUnique() {
    return [...arguments]
      .flat()
      .filter((item, ind, arr) => arr.indexOf(item) === ind);
  }

// This is the long method of the above
  function uniteUnique2(arr, ...extra) {
    let newArr=[...arr]
    let actualArray=[]
    
    for( const arg of extra){
        newArr = [...newArr, ...arg];
    }
    for(let i=0;i<newArr.length;i++){
        if(newArr.indexOf(newArr[i])===i){
            actualArray.push(newArr[i])
        }
    }
        return actualArray;
    }  

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]));