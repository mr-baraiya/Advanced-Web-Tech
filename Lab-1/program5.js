// 5. WAP in JavaScript to check whether the given number is palindrome or not. (A) 
function isPalindrome(n){
    let original = n;   
    let reversed = 0;
    while(n > 0){
        let digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
    }
    return original === reversed;
}
var n = 1211
if(isPalindrome(n)){
    console.log(`${n} is a Palindrome Number.`);
}else{
    console.log(`${n} is not a Palindrome Number.`)
}