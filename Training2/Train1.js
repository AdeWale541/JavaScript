// Updating, deleting objects, arrays and properties
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
   if(value.length===0){
      delete records[id][prop];
    }  // Delete property if the value is empty
    else if(prop !="tracks" && value.length>0){
    records[id][prop]= value;
    } // Update record with value if property is not track and value is not empty
    else if((prop ==="tracks" && value.length>0)&&(records[id].hasOwnProperty(prop))){
    records[id][prop].push(value);
  } // push value to the last element if property is track, value is not empty and property already exists
  else if((prop ==="tracks" && value.length>0)&&(records[id].hasOwnProperty(prop)=== false)) {
    
    records[id][prop]= [];
    records[id][prop].push(value);
   } // push value to the last element if property is track, value is not empty and property does not exist



   /*  else if (prop === "tracks" && value !== "") {
    if (records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }*/


    return records;
}

console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));