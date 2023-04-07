// add two numbers
function add (a, b){
    return a+b;
}

// subtract two numbers
function subtract(a, b){
    return a-b;
}

// take in several arguments and return the total of all
function sum(...numbers){

 return    numbers.reduce( (accumulator, currentVal) => accumulator + currentVal);
}

// take in several arguments and return the product of all
function product(...numbers){

    return numbers.reduce((accumulator, currentVal) => accumulator * currentVal)
}

// console.log(add(10, 12))
// console.log(subtract(10, 12))
// console.log(product(10, 12, 22, 32))
// console.log(sum(10, 12, 22, 32))


module.exports = {add, subtract, sum, product}