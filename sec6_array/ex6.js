const max = getMax([1,3,5,7,9]);

function getMax(array){
    if (array.length === 0){
        return undefined;
    }
    return array.reduce((a, b) => (a > b) ? a : b);
}
console.log(max);