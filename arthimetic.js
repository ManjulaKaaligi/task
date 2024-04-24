// arithmetic operation
const prompt = require("prompt-sync")();

//addition
arthimetic_operation = (a, b) => {
    
    a = parseInt(a)
    b=parseInt(b)
    return a + b
}

a = prompt("Enter a value:")
b = prompt("Enter b value:")
console.log(arthimetic_operation(a,b));

//multiplication
arthimetic_operation = (a, b) => {
    
    a = parseInt(a)
    b=parseInt(b)
    return a * b
}

a = prompt("Enter a value:")
b = prompt("Enter b value:")
console.log(arthimetic_operation(a,b));