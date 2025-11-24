// 10. WAP in JavaScript to print the GCD of two number. (A) 
function gcd(a, b){
    while(b){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
var a = 56;
var b = 98;
console.log(`GCD of ${a} and ${b} is = ${gcd(a, b)}`);
