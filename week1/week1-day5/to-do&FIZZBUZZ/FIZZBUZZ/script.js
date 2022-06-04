function fizzbuzz() {
    for (var number = 1; number <= 100; number++) {
        if (number%3 == 0 && number%5== 0){
            console.log("FizzBuzz");
            document.write("<h2>FizzBuzz</h2>");
        }
        else if (number%3 == 0) {
            console.log("Fiz"); 
            document.write("<h2>Fizz</h2>");
        }
        else if (number%5 == 0) {
            console.log("Buzz");
            document.write("<h2>Buzz</h2>");
        }
        else {
            console.log(number);
            document.write("<h2>"+number+"</h2>");
        }
    }
}
fizzbuzz();

// function fizzbuzz(number) {
//     var x;
//     for (var number = 1; number <= 100; number++) {
//         if (number % 3 == 0 && number % 5 == 0)
//             x = "FizzBuzz"
//         if (number % 3 == 0)
//             x = "Fizz"
//         if (number % 5 == 0)
//             x = "Buzz"
//         else {
//             console.log(x);
//         }
//     }

// }
// fizzbuzz();