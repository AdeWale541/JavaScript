const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // ES6
    const{today: { low:lowToday, high:highToday}} = LOCAL_FORECAST;
  
  // ES5
  /*const lowToday = LOCAL_FORECAST.today.low;
const highTomorrow = LOCAL_FORECAST.today.high;   */