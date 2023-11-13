/* Employee cannot be less than 18 years
 Employee must not be 65 or above

 If too young, write "User is too young to work"
 If too old, write "User is too old to work"
 If within range, write "User is eligible to work"



 18
 65

0-18      | below 18     -- Too young

18-64.9  |  From 18 to below 65 ----- Eligible to work

65 - Infinity     | 65 and above     ------ Too old to work

  Invalid age, please enter a valid age
*/

console.log(userEligibleToWork(1000));


function userEligibleToWork(userAge){

    if (userAge<18){
        return false+" User is too young to work"
    } else if(userAge>=65){
        return false+" User is too old to work"
    }
    
    return true+" User is eligible to work"
    
    }