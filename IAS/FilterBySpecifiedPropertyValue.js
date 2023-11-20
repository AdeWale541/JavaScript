//Program to filter an initial array/argument by checking elements with property s as the 2nd argument

function whatIsInAName(collection, source) {

    let newObject=[]
    let propertyCheck;
    collection.forEach(element => {
         propertyCheck= true
            for (let property in source) {
               
                 if(element[property]===source[property]){
                    }else{
                    propertyCheck= false
                     }
            }
    if(propertyCheck==true){
        newObject.push(element)
    }
});
    return newObject
    }
    // Easier and cleaner way
    function whatIsInAName2(collection, source) {
        // "What's in a name? that which we call a rose
        // By any other name would smell as sweet.”
        // -- by William Shakespeare, Romeo and Juliet
        const sourceKeys = Object.keys(source);
    
        return collection
          .filter(obj => sourceKeys
            .every(key => obj[key] === source[key]));
      }


      console.log(whatIsInAName2([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 },{"origin":14}], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 },{"origin":14}], { "apple": 1, "bat": 2 }));