// The mapping method which uses the callback function which makes use of each element, 
//its index and its array
Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
  for(let i=0;i<this.length;i++)
  newArray.push(callback(this[i],i,this)); 
    // Only change code above this line
    return newArray;
  };