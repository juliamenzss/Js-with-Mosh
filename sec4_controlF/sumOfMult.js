function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;    
  }
  
  console.log(sum(15)); // Isso imprimirá a soma dos números divisíveis por 3 ou 5 até o limite de 15
  