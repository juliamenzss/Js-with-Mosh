

function mostrarNum(limite) {
  for (let i = 0; i <= limite; i++) {
    const result = (i % 2 === 0) ? 'Par' : 'Impar';
    console.log(`${i} é ${result}`);
  }
}
mostrarNum(10);