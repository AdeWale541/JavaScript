// Only change code below this line
class Thermostat{
    constructor(fahrenheitTemperature){
      this._fahrenheitTemperature=fahrenheitTemperature;
         this._celsiusTemperature= (5/9) * (this._fahrenheitTemperature -32);
    }
    
      get temperature() {
        return this._celsiusTemperature;
      }
      set temperature(newCelsiusTemperature) {
        this._celsiusTemperature= (newCelsiusTemperature);
    }
    
    }
    // Only change code above this line
    
    const thermos = new Thermostat(76); // Setting in Fahrenheit scale
    let temp = thermos.temperature; // 24.44 in Celsius
    console.log(temp);
    thermos.temperature = 26;
    temp = thermos.temperature; // 26 in Celsius
    console.log(temp);