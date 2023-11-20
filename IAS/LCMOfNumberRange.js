// function to find the LCM of a range of numbers
// Fill command is to fill up an array with a specific vallue
function smallestCommons(arr) {
      // Setup
      const [min, max] = arr.sort((a, b) => a - b);
      const range = Array(max - min + 1) // Specifies array length
        .fill(0) 
        .map((_, i) => i + min);

        console.log(range);
      // GCD of two numbers
      // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
      const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
      // LCM of two numbers
      // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
      const lcm = (a, b) => a * b / gcd(a, b);
      // LCM of multiple numbers
      // https://en.wikipedia.org/wiki/Least_common_multiple#Other
      return range.reduce((multiple, curr) => lcm(multiple, curr));
    }

  
  console.log(smallestCommons([4,9]));