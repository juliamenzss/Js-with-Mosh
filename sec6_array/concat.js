const first = [ {id: 1} ];
const second = [5, 6, 7];

const combined = first.concat(second);
// first[0].id = 10;
// console.log(combined);


//extrai extrai uma parte de um array, param1 onde começa, param2 onde termna, nao inclusivo ele msm
const slice = combined.slice(0,4);
console.log(combined.length);
console.log(slice);