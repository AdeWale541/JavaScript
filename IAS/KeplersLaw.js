// Program that uses Kepler's third law to return the the orbital period of two point masses orbiting each other in a circular or elliptic orbit is:

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const PiValue= 4* Math.pow(Math.PI,2) // Adding
    const newArr=[]
      
    function orbitalValue(alt){
       return Math.round(Math.sqrt((Math.pow((alt +earthRadius),3)*PiValue/GM)))
    }
    arr.forEach(element => { 
       newArr.push({name:element.name,orbitalPeriod:orbitalValue(element.avgAlt)})
    });


    return newArr;
  }
  //Shorter but less clean version
  function orbitalPeriod2(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({ name, avgAlt }) => {
      const earth = earthRadius + avgAlt;
      const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
      return { name, orbitalPeriod };
    });
  }
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  console.log(orbitalPeriod2([{name : "sputnik", avgAlt : 35873.5553}]));