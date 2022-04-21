function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  console.log([4, 6, 8, 9, 12].findIndex(isPrime));
  console.log([4, 6, 7, 9, 12].findIndex(isPrime)); 
  