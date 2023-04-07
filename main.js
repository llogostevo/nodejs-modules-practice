const math = require('./modules/mathFunc.js')

let add = math.add;
let subtract = math.subtract;

console.log(add(1,2));

console.log(math.add(2,3));

console.log(math.subtract(10,23));

console.log(subtract(10,23));

let total = math.sum(12, 12, 12, 12, 12, 12, 12, 12, 12, 12)
console.log(`12*12 = ${total}`)


let powerOf = math.product(12, 12, 12, 12, 12, 12, 12, 12, 12, 12)
console.log(`12 ^10 = ${powerOf}`)
