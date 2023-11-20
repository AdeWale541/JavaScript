// Program to add all the primes less than or equal to a particular number
function sumPrimes(num) {
    
    let primeNumber=2
    let totalSum=0
    let primeStatus= true;
    while(primeNumber<=num){     
        primeStatus= true;   
    for (let i=2;i<=Math.sqrt(primeNumber);i++){ 
    //Note: Any factor multiple(1*100,2*50, 5*1 for a number of 100) of a number cannot have both factors be greater than the squaare root of that number
        if (primeNumber % i === 0){ 
             primeStatus= false
             break;
        }
    }
    if (primeStatus=== true){
        totalSum += primeNumber
    }
    primeNumber++
}
    return totalSum;
  }
  // Shorter method using arrays and reduce method
  function sumPrimes(num) {
    // Check all numbers for primality
    let primes = [];
    for (let i = 2; i <= num; i++) {
      if (primes.every((prime) => i % prime !== 0))
        primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
  }
  
  console.log(sumPrimes(10));