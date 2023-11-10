const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  //ES6
  
  const {today, tomorrow} = HIGH_TEMPERATURES;

  
  // ES5
/*const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;*/

console.log(today, tomorrow, HIGH_TEMPERATURES)