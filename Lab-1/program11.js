// 11. Write a JavaScript to take 2-digit number and then separate these 2 digits, then multiply ƒrst 
// digit by itself for second digit times. (B) 
// (For example, 23 should be separated as 2 and 3. 2 should multiply with itself 3 times). 
function multiplyDigits(num) {
    if (num < 10 || num > 99) {
        return "Please enter a valid 2-digit number.";
    }
    let firstDigit = Math.floor(num / 10);
    let secondDigit = num % 10;
    let result = 1;
    for (let i = 0; i < secondDigit; i++) {
        result *= firstDigit;
    }
    return result;
}

var num = 23;
var output = multiplyDigits(num);
console.log(`The result of multiplying the first digit by itself for the second digit times is: ${output}`);