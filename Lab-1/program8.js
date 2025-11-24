// 8. WAP in JavaScript to find prime numbers between the given range of numbers. (A)

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function primeInRange(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(`Prime numbers between 10 and 50 are: ${primeInRange(10, 50).join(", ")}`);
