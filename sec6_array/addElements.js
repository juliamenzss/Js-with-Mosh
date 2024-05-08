const numbers = [3,4];
 // Adicionando ao final
 numbers.push(5,6);
 //----------------------
 // Adicionando ao começo
 numbers.unshift(1,2);
 // Adicionando ao meio
 numbers.splice(2, 0, 'a', 'b')
 console.log(numbers);