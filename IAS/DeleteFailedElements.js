// Program that keeps deleting element in an array until 1 of them returns true to the function being passed into the function

function dropElements(arr, func) {
    while(arr.length>0 && !func(arr[0])){
    
    arr.shift() 
    }
    return arr
    }
    
    console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))