//Factorial of a given number
const prompt = require("prompt-sync")();

n = prompt("Enter number:")
given_num = parseInt(n)


function factorial_of_num(given_num) { 
    let result = 1; 
     
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        result = result * i; 
    return result; 
}
 
console.log(factorial_of_num(given_num));