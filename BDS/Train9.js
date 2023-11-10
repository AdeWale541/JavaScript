// Counts the number of users online

const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
    let i=0;
  for (let user in allUsers) {
     if (allUsers[user]["online"]=== true){
  i++;
  } else{}
  }
   return i;
    // Only change code above this line
  }
  console.log(countOnline(users));
  console.log(Object.keys(users));// To print out list of all keys/properties in an object