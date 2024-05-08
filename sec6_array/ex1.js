const numbers = arrayFromRange(5, 15);

console.log(numbers);

function arrayFromRange(min, max){
    const output = [];
    for (let i = min; i <= max; i++){
        output.push(i)
    }
    return output;
}
