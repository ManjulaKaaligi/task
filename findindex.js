//[123456] if 2 is present print it's index else print ele not found
const prompt = require("prompt-sync")();
arr=[1,2,3,4,5,6]


if (2 in arr)
{
    index_value = arr.indexOf(2)
    console.log(index_value)
}
else{
    console.log("Not found")
}