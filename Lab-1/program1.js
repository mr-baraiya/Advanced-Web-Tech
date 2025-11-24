// 1. WAP in JavaScript to make simple calculator using popup box. (A) 
function calculate() {
    var num1 = parseFloat(prompt("Enter first number:"));
    var num2 = parseFloat(prompt("Enter second number:"));
    var operation = prompt("Enter operation (+, -, *, /):");
    var result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Error: Division by zero is not allowed.");
            }
            break;
        default:
            alert("Error: Invalid operation.");
            return;
    }
    alert("Result: " + result);
}
// Call the function to execute the calculator
calculate();