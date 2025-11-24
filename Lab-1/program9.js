// 9. WAP to display given patterns using JavaScript. (A) 
// * 
// * * 
// * * *
// * * * *
// * * * * *
function printPattern(n){
    for(let i=1;i<=n;i++){
        let row = '';
        for(let j=1;j<=i;j++){
            row += '* ';
        }
        console.log(row);
    }
}
var n = 5;
printPattern(n);
