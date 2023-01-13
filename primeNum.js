function findPrimes() {
    let n = document.getElementById("inputValue").value;
    let primes = [];
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    document.getElementById("output").innerHTML = primes;
  }