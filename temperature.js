const prompt =  require("prompt-sync")();

// temperature conversion using arrow functions in js
fahrenheit = (celsius) => {
    return (celsius * 9/5) + 32
}
celsius = parseInt(prompt("Enter celsisu value: "))
console.log(fahrenheit(celsius))