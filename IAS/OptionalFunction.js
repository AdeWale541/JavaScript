// Program that accepts 1 or 2 numbers and adds them together and throws undefined if either argument is not a number
//Number.isInteger to check if a value is a number

function addTogether() {

    if([...arguments].length==1 && typeof([...arguments][0])==='number' ){
       let initialValue=[...arguments][0];
        return function(num) { if(typeof(num)==='number') 
        {return num +initialValue}
       return undefined
        
    }
    } else if([...arguments].length==2 && typeof([...arguments][0])==='number'&& typeof([...arguments][1])==='number'){
        return [...arguments][0]+ [...arguments][1]
    }else{
        return undefined} 
  }
  // Cleaner code below. Very easy to read
  function addTogether2() {
    const [first, second] = arguments; // second is undefined if only 1 argument is passed
  
    function addSecond(second) {
      if (typeof (second) === "number") return first + second;
    }
  
    if (typeof (first) === "number") {
      if (arguments.length === 1) return addSecond;
      if (arguments.length === 2) return addSecond(second);
    }
  }
  console.log(addTogether(5));
  console.log(addTogether2(5));