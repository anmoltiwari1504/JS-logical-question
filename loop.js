// Write a JS code to display sum off all natural numbers.

// let n = 100;
// let sum = 0
// for (let i = 1; i <= n; i++){
//   sum += i; //sum = sum +i

// }
// console.log(sum)


//Write a JS code to display sum off all even numbers from 1 to 100. (also code this question for negative integer)

// let n = 100;
// let sum = 0;
// for (let i = 1; i <= n; i++){
//   if (i % 2 === 0) {
//     sum += i
//   }
// }
// console.log(sum)
// let n = 100;
// let sum = 0;
// for (let i = -1; i >= -n; i--){
//   if (i % 2 === 0) {
//     sum += i
//   }
// }
// console.log(sum)


//Write a JS code to display sum off all odd numbers from 1 to 100. (also code this question for negative integer)

// let n = 100;
// let odd = 0;

// for (let i = 1; i <= n; i+=2){
//   odd += i
// }
// console.log(odd)


// Write a JS code to find the power of a number using for loop.(try this question using loops and functions)


// function powerOfNumber(base, power) {
//   let result = 1;
//   for (let i = 1; i <= power; i++){
//     result = result * base
//   }
//   return result
// }
// console.log(powerOfNumber(2,3))


// Write a JS code to find the sign of the product of three numbers. Display an alert box with the specified sign.


// let a = 1;
// let b = 5;
// let c = 5;

// let product = a * b * c;

// if (product > 0) {
//   alert("Number is positive");

// }
// else if (product < 0) {
//   alert("Number is negative")
// }
// else {
//   alert("Number is zero")
// }


//  Write a JS code to print a Fibonacci Sequence Up to a Certain Number.

    // let a = 0;
    // let b = 1
    // for (let i = 1; i <= 50; i++){
    //   if (a > 50) {
    //     break
    //   }
    //   console.log(a)
    //   let next = a + b;
    //   a = b;
    //   b = next; 

    // }

    //  Write a JS code to find N value in the Fibonacci series for a given number. (input should be taken by prompt)
    
// let number = Number(prompt("Enter the number"));
// let a = 0;
// let b = 1;
// for (let i = 0; i <= number; i++){
//   if (a > number) {
//     break 
//   }
//   console.log(a)
//   let next = a + b;
//   a = b;
//   b = next
// }

// Using a for loop print all even numbers up to and including n. (input should be taken by prompt);

// let n = Number(prompt("Enter the number"));
// let even = 0;

// for (let i = 0; i <= n; i++){
//   if (i % 2 === 0) {

//     console.log(i)
//   }

// }


// Given a number n Calculate the factorial of the number. (input should be taken by prompt)

// let n = Number(prompt("Enter the number"));

// let factorial = 1;
// for (let i = 1; i <= n; i++){
//   factorial = factorial * i
// }
// console.log(factorial)


// Write JS Function to find the sign of the given numbers. (input should be taken by prompt);

//Write a JS code using any loop to print all the positive integers from 1 to 100. If a number is multiple of 3, 5, 7 then a msg of multiple will be shown just next to the number.


// for (let i = 1; i <= 100; i++){
//   if (i % 3 === 0) {
//     console.log("Multiple of 3")
//   }
//   if (i % 5=== 0) {
//     console.log("Multiple of 5")
//   }
//   if (i % 7 === 0) {
//     console.log("Multiple of 7")
//   }
//   console.log(i)
// }

// Write a JS function that accepts an argument and returns the data type. (input should be taken by prompt)

// function type(n) {
//   return typeof n;
// }

// let input = prompt("Enter a value:");

// if (input === "true" || input === "false") {
//   input = input === "true";
// } 
// else if (!isNaN(input) && input.trim() !== "") {
//   input = Number(input);
// }

// console.log(type(input));