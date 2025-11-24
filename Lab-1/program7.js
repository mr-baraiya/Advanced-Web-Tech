// 7. WAP in JavaScript to print the factors of given number. (A) 
function printFactors(n){
    let factors = [];
    for(let i=1;i<=n;i++){
        if(n % i === 0){
            factors.push(i);
        }
    }
    return factors;
}
var n = 28;
console.log(`Factors of ${n} are: ${printFactors(n).join(", ")}`);
