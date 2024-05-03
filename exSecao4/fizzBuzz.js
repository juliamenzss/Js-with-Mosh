// console.log(inLandscape(300,600));

// function inLandscape(width, heigth) {
//     return (width > heigth);
// }

// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz
// Nao divisivel por 3 ou 5 => input
// Not a number
const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number')
    return NaN;


if (input % 3 === 0 && input % 5 === 0)
    return 'FizzBuzz'
 
if(input % 3 === 0)
    return 'Fizz'

if(input % 5 === 0)
    return 'Buzz';

return input;
}