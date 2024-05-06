function soma(a, b, c) {
    return a + b + c;
}

const valores = [1, 2, 3];
console.log(soma(...valores)); // Output: 6

//------------------------------------

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, 'a', ...second, 'b'];

const copy = [...combined];
console.log(copy);
