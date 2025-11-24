// 3. WAP in JavaScript to ƒnd the factorial of given number. (A)
function factorial(n){
    let ans = 1;
    for(let i=1;i<=n;i++){
        ans *= i;
    }
    return ans;
}
var n = parseInt(prompt("Enter the Number : "));
confirm(`Factorial of ${n} is = ${factorial(n)}`);
