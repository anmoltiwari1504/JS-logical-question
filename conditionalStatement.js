// Write a program to check whether a given number is positive, negative, or zero.

// let number = Number(prompt("Enter the number "));

// if (number > 0) {

//   console.log("number is positive")
// }
// else if (number < 0) {
//   console.log("Number is negative")
// }


// Write a program that checks if a given number is even or odd.

// let number = Number(prompt("Enter the number "));

// if (number % 2 === 0) {
//   console.log("Even Number");

// }
// else {
//   console.log("Odd Number")
// };


// Write a program to check whether a given year is a leap year or not.

// let year = 2005;
// if ((year % 4 === 0 || year % 400 == 0) ) {
//   console.log("It's a leap year")
// }
// else {
//   console.log("Not a leap year")
// }

//Write a program to find the greatest of two numbers entered by the user.

// let number1 = Number(prompt("Enter the first number"));
// let number2 = Number(prompt("Enter the second number"));

// if (number1 == number2) {
//   console.log("Both number are equal")
// }
// else if (number1  number2) {
//   console.log("Number1 is greater")
// }
// else {
//     console.log("Number2 is greater")
// }

//Write a program to find the greatest among three numbers entered by the user.
// let number1 = Number(prompt("Enter the first number"));
// let number2 = Number(prompt("Enter the second number"));
// let number3 = Number(prompt("Enter the third  number"));

// if (number1 == number2 && number1 == number3) {
//   console.log("All number are equal")
// }
//  else if (number1 > number2) {
//   console.log("Number1 is greater")
// }
//  else if (number2 > number3) {
//   console.log("Number2 is greater")
// }
// else {
//     console.log("Number3 is greater")
// }

// Write a program that checks whether a given number is divisible by 5 or not.

// let number = Number(prompt("Enter the number"));
// if (number % 5 === 0) {
//   console.log("Number is divisble by 5")
// }
// else {
//   console.log("Number is not divisible by 5s")
// }

// Write a program to check whether a given character is a vowel or a consonant.

// let letter = prompt("Enter the letter");

// if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//   console.log("Letter is vowel")
// }
// else {
//   console.log("Letter is consonant")
// }


//  Write a program to check whether a student has passed or failed an exam. (Passing marks = 40).

// let marks = Number(prompt("Enter the marks"));
// if (marks >= 40) {
//   console.log("Pass ho gye!")
// }
// else {
//   console.log("next year pher se dena paper")
// }


// Write a program that checks whether a given number is within the range 10 to 50 or not.


// let number = Number(prompt("Enter the number"));

// if (number >= 10 && number <= 50) {
//   console.log(number ,"in the range")
// }
// else {
//   console.log("Not the range")
// }


// Write a program to check if a number is multiple of 3, multiple of 7, or neither.

// let number = Number(prompt("Enter the number"));

// if (number % 3 === 0 &&  number % 7 === 0) {
//   console.log("Number is divisible both 3  or 7")
// }
// else if (number % 3 == 0 || number % 7 == 0) {
//   console.log("Number is divisble by 3 or 7")
// }
// else {
//   console.log("Not divisble by 3 or 7")
// }


// A shopkeeper gives a 10% discount if the purchase amount is more than 500. Otherwise, no discount. Write a program to check discount eligibility.

// let price = Number(prompt("Enter the price"));

// if (price >= 500) {

// console.log(price -(price*0.1),"discounted price")
// }
// else {
//   console.log("There is no discount in this purchase amount ")
// }


// - A person can vote if his/her age is 18 or above. Otherwise, not eligible. Write a program.


// let age = Number(prompt("Enter the age"));
// if (age >= 18) {
//   console.log("Eligible for vote")
// }
// else {
// console.log("Not eligible for vote")
// }


//A traffic light shows Red → Stop, Yellow → Wait, Green → Go. Write a program to print the action based on the light color.

// let light = prompt("Enter the light color").toLowerCase()

// if (light === "red" ) {
//   console.log("Stop!")
// }
// else if (light === "yellow") {
//   console.log("wait!");

// }
// else if (light === "green") {
//   console.log("Goooo !")
// }
// else {
//   console.log("This is not a traffic light color")
// }


// A student’s grade is decided as:

// Marks ≥ 90 → Grade A
// Marks ≥ 75 → Grade B
// Marks ≥ 50 → Grade C

// Otherwise → Fail


// let marks = Number(prompt("Enter the marks"));
// if (marks >= 90) {
//   console.log("Grade A")
// }
// else if (marks >= 75) {
//   console.log("Grade B")
// }
// else if (marks >= 50)
// {
//   console.log("Grade C")
// }
// else {
//   console.log("Next year paper dena")
// }

// A cinema ticket costs 200. If the person’s age is below 12, ticket costs 100. If age is above 60, ticket costs 150. Otherwise, normal price. Write a program.

// let age = Number(prompt("Enter the age"));
// if (age >= 60) {
//   console.log("150 is the ticket price")
// }
// else if (age <= 12) {
//   console.log("Ticket price is 100")
// }
// else {
//   console.log("Ticket price is 200")
// }

//  company gives a bonus to employees: If experience ≥ 5 years, bonus = 10,000 else bonus = 5,000. Write a program to calculate bonus.


// let experience = Number(prompt("Enter your experience"));

// if (experience >= 5) {
//   console.log("Your bonus is 10000")
// }
// else {
//   console.log("Your bonus is 5000")
// }

//     A weather app shows:
//     Temp < 0 → "Freezing Weather"
//     Temp 0–20 → "Cold Weather"
//     Temp 21–35 → "Normal Weather"
//     Temp > 35 → "Hot Weather"
//     Write a program.

// let temp = Number(prompt("Enter the temperature"));
// if (temp <= 0) {
//   console.log("Freezing weather");

// }
// else if (temp > 0 && temp <= 20) {
//   console.log("Cold Weather")
// }
// else if (temp >= 21 && temp <= 35) {
//   console.log("Normal Weather")
// }
// else {
//   console.log("Hot Weather")
// }

//  An ATM allows withdrawal only if amount ≤ balance. Otherwise, print “Insufficient Balance”. Write a program.

// let balance = Number(prompt("Enter the balance"));
// let amount = Number(prompt("Enter the amount"));

// if (amount > balance) {
//   console.log("Insufficient balance")
// }
// else {
//   console.log(balance - amount ,"Remanining balance")
// }


// A student gets scholarship if marks ≥ 85. Otherwise, no scholarship. Write a program.


//  let marks = Number(prompt("Enter the marks"));
// if (marks >= 90) {
//   console.log("Eligible for scholarship")
// }
// else {
//   console.log("Not eligible")
// }