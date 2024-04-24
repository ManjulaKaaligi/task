//Find Max num [23,45,12,67,89,34]
const prompt = require("prompt-sync")();

arr = [23,45,12,67,89,34]
result = arr.reduce((acc, current) => Math.max(acc, current));
console.log(result);

