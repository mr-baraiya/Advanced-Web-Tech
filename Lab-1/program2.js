// 2. WAP in JavaScript to check whether the given no. is prime or not. (A)\
function isPrime(n){
    for(let i=2;i<=n/2;i++){
        if(n%2==0){
            return false;
        }
    }
    return true;
}
var n = parseInt(prompt("Enter the Number : "));
if(isPrime(n)){
    confirm(`${n} is a Prime Number.`);
}else{
    alert(`${n} is not a Prime Number.`)
}
isPrime();