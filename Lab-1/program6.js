// 6. WAP in JavaScript to check whether the given number is Armstrong or not. (A) 
function isArmstrong(n){
    let original = n;
    let sum = 0;
    let digits = n.toString().length;
    while(n > 0){
        let digit = n % 10;
        sum += Math.pow(digit, digits);
        n = Math.floor(n / 10);
    }
    return original === sum;
}
var n = 153
if(isArmstrong(n)){
    console.log(`${n} is an Armstrong Number.`);
}else{
    console.log(`${n} is not an Armstrong Number.`)
}