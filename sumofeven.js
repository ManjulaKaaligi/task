//Create a function that takes an array number and returns sum of all even numbers [1,2,3,4,5,6,7,8,9]
const prompt = require("prompt-sync")();

arr = [1,2,3,4,5,6,7,8,9]
result = 0
function sum_of_even(arr) {
    for(let i of arr){
        if(i%2==0){
            result = result + i
        }
    }
    console.log(result)
}

sum_of_even(arr)