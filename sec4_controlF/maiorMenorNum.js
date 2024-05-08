function maxNum(num1,num2) {
let maiorNum = num1 > num2 ? `${num1} é maior.` : `${num2} é maior`
console.log(maiorNum);
}
maxNum(32,6);

let number = min(3,1);
console.log(number);

function min(a,b) {
    return(a < b) ? a : b;
}