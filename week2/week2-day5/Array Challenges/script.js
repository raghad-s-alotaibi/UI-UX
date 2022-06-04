console.log("always Hungry");
function alwaysHungry(arr) {

    for (var i=0;i<arr.length;i++){
      if (arr[i] == "food"){
        console.log("yummy");
      }
      else {
        console.log("I'm hungry");
      }
    }
}
var x = [3.14, "food", "pie", true, "food"];
alwaysHungry(x);
// this should console log "yummy", "yummy"
var y = [4, 1, 5, 7, 2];
alwaysHungry(y);
// this should console log "I'm hungry"


console.log("High Pass Filter");
// High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

console.log("Better than average");
// Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    var count = 0
    // count how many values are greated than the average

     // Find average
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];   
    }
         
    sum = sum / arr.length;

     // Print elements greater than average
     for(var i = 0; i < arr.length; i++){
         if (arr[i] > sum){
            
            count+=1
         }
     }
    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

console.log("Array Reverse");
// Write a function that will reverse the values an array and return them.
function reverse(arr) {
    for (var i=0;i<arr.length/2;i++){
        var temp = arr[i];
        arr[i] =  arr[arr.length-1 - i]; 
        arr[arr.length-1 - i] = temp;
      }
    return arr;
}   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//Fibonacci Array
console.log("Fibonacci Array");
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (var i = 2; i < n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

