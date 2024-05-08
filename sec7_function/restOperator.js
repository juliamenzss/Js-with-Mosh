function sum(...args) {
    let toral = 0;
    return args.reduce((a, b) => a + b)
}

console.log(sum(1, 2, 3, 4, 5, 6));


function sum2(discount,...price) {
    const total = price.reduce((a, b) => a + b)
    return total *(1 - discount)
}

console.log(sum2(0.1, 20, 30));
