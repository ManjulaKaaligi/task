//Create a function that takes an array of numbers and return second largest number in the array [10,5,8, 20,15,12]
const prompt = require("prompt-sync")();

arr =  [10,5,8,20,15,12] 


function secondLargest(arr) {
  var max1st = arr[0];
  var max2nd = 0;
  
  for(let i=0; i<arr.length; i++) {
    if(arr[i] > max1st) {
      max2nd = max1st;
      max1st = arr[i];
    }
    else if(arr[i] > max2nd && arr[i] != max1st) {
      max2nd = arr[i];
    }
  }

  return max2nd;
}

console.log(secondLargest(arr));