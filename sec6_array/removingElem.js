const numbers = [1, 2, 3, 4, 5, 6];

// Excluir no final
const last = numbers.pop();
console.log(numbers);
console.log(last);

// Removendo no começo
const first = numbers.shift();
console.log(numbers);


//Removendo no meio 
numbers.splice(1,3)
console.log(numbers);