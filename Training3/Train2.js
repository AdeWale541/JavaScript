// Ternary operator

function checkEqual(a, b) {
 
    return a===b ?"Equal":"Not Equal"; // Easier way to write if a=b, return "equal" else return "Not equal"
   }
   
   checkEqual(1, 2);

   function checkSign(num) { // checks if number is positive, negative or zero and returns answer as a string
    return (num>0) ? "positive"
    :(num===0) ? "zero"
    : "negative";
    }
    
    checkSign(10);