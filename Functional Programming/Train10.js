// The mapping function which makes use of the callback function and checks each element
Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
  for(let i=0;i<this.length;i++){
    if(callback(this[i],i,this)==true){
   newArray.push(this[i])   
    } 
  }
    // Only change code above this line
    return newArray;
  };