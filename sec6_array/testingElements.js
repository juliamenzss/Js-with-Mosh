const numbers = [1, 2, -3];

const atLeastOnePositive = numbers.some((value) => {
value >= 0;
});

console.log(atLeastOnePositive);


const numbers2 = [1, 2, -3, -4, 5];

const allPositive = numbers.every((value) => {
value >= 0;
});

console.log(allPositive);