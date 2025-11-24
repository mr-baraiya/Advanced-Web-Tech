// 4. WAP in JavaScript to print the Fibonacci series of a number. (A) 
function fibonacci(n){
    let a = 0
    let b = 1
    let ans = 0;
    for(let i=1;i<=n;i++){
        console.log(ans)
        a = b;
        b = ans;
        ans = a + b;
    }
    return ans;
}
var n = 10
fibonacci(n)