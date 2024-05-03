console.log("Incremento");
for (initialExpression; condition; increment)
for (let i = 0; i < 15; i++){
    if (i % 2 !== 0) console.log(i);
}

console.log("Descremento");
for (let i = 15; i >= 0; i--) {
    if (i % 2 !== 0) console.log(i);
}

// ---- for-in
const person = {
    name: 'Julia',
    age: 25
};

for (let key in person){
    console.log(key, person[key]);
}
console.log('--------------');
const colors = ['red', 'green', 'blue'];
for (let index in colors){
    console.log(index, colors[index]);
}

