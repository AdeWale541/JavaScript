//Adding new properties to an object using dot notaton and bracket notation

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  const farmname= "Name of Farm"
  // Only change code below this line
  foods.bananas=13;    // Dot notation
  foods['grapes']=35;    // Bracket notation
  foods[farmname]= "Kam Farms"; // Bracket notation with variable

  // Only change code above this line
  
  console.log(foods);