// Switch training
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  
  switch(name) {
    case contacts[0].firstName:
      if (contacts[0].hasOwnProperty(prop)){
        return contacts[0][prop];
      } else {
        return "No such property";
  }
  break;
  
    case contacts[1].firstName:
      if (contacts[1].hasOwnProperty(prop)){
        return contacts[1][prop];
      } else {
        return "No such property";
  }
  break;
    case contacts[2].firstName:
      if (contacts[2].hasOwnProperty(prop)){
        return contacts[2][prop];
      } else {
        return "No such property";
  }
  break;
    case contacts[3].firstName:
      if (contacts[3].hasOwnProperty(prop)){
        return contacts[3][prop];
      } else {
        return "No such property";
  }
  break;
    default:
      return "No such contact" ;
  break;
  }


/* for(let i=0; i<contacts.length;i++){
    if (contacts[i].firstName=== name && contacts[i].hasOwnProperty(prop)){
        return contacts[i][prop];
    } else if(contacts[i].firstName=== name && contacts[i].hasOwnProperty(prop)=== false){
       return "No such property";
    }
  }
    return "No such contact"
*/

    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");