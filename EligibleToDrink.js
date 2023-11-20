/* 
USA
Customers less than 21 years cannot order a drink
Customers 21 years and above can order a drink


Canada
Customers less than 18 years cannot order a drink
Customers 18 years and above can order a drink

*/

console.log(userEligibleToDrink("Canada",18));







   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
function userEligibleToDrink(country,userAge){
    switch(country){

        case"USA": if (userAge<18){
            return false+" User is too young to drink"
        } else if(userAge>21){
            return false+" User is too old to drink"
        }
        case"Canada": if (userAge<21){
            return false+" User is too young to drink"
        } else if(userAge>21){
            return false+" User is too old to drink"
        } 
        default: return "invalid input"; }
    }