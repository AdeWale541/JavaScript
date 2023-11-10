// modifying object property using bracket and do notation
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity["data"]["online"]= 45 // Bracket notation
userActivity.data.totalUsers=102 // Dot notation 
  // Only change code above this line
  
  console.log(userActivity);