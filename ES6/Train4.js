const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  //ES6
    
  const {today:highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES;
  console.log(highToday, highTomorrow, HIGH_TEMPERATURES)
  // ES5
  /*const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow;   */