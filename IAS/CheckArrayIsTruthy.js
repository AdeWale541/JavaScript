// Program that checks if a property specified in the 2nd argument has a truthy value in the first argument
// !element[pre] is used to check if the value is truthy
// !element.hasOwnProperty(pre)  is used to check if the property exists
//

function truthCheck(collection, pre) {
  let propertyCheck=true;
  collection.forEach(element=>{
if (!element.hasOwnProperty(pre) || !element[pre]){
    propertyCheck= false
}
  })
  return propertyCheck;
    }
// Shorter and perfect one
    function truthCheck(collection, pre) {
        return collection.every(function (element) {
          return element.hasOwnProperty(pre) && Boolean(element[pre]);
        });
      }

   console.log(truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users"));