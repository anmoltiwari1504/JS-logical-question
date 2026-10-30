// Given an array of integers, count how many numbers are divisible by both 3 and 5 and also calculate the sum of
// only those numbers.

// let array = [10,15,15, 6, 2, 24 , 2];
// let newArr = [];
// for (let i = 0; i <= array.length; i++){
//   if (array[i] % 3 === 0 && array[i] % 5 === 0) {
//     newArr += array[i]
//   }
// console.log(newArr)
// }

// Find the second largest DISTINCT  number in an array without sorting it. If it does not exist, report that clearly.

// let arr = [10, 40, 60, 43, 50];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     secondLargest = largest;
//     largest = arr[i];
//   } else if (arr[i] > secondLargest && arr[i] < largest) {
//     secondLargest = arr[i];
//   }
// }

// if (secondLargest === -Infinity) {
//   console.log("No second largest element");
// } else {
//   console.log("Second largest:", secondLargest);
// }


// Count how many elements of an array are positive, negative and zero.


// const arr = [24.49, 20, 60, 40, 0, 0, -2, -6];

// let positiveCount = 0;
// let negativeCount = 0;
// let zeroCount = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     positiveCount++;
//   } else if (arr[i] < 0) {
//     negativeCount++;
//   } else {
//     zeroCount++;
//   }
// }

// console.log("Positive numbers:", positiveCount);
// console.log("Negative numbers:", negativeCount);
// console.log("Zeros:", zeroCount);



//Write a function isSorted(arr) that returns true if the array is sorted in non-decreasing order, otherwise false.
// function checkSortedArray(arr) {
  

//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//       return false

//     }
  
//   }

//   return true;

// }
// console.log(checkSortedArray([20,39,4]))


// Using a while loop, reverse a given positive integer and tell whether the number is a palindrome.

// let num = 121;
// let original = num;
// let reverse = 0;

// while (num > 0) {
//   let digit = num % 10;
//   reverse = reverse * 10 + digit;
//   num = Math.floor(num / 10);
// }

// console.log("Reversed number:", reverse);

// if (original === reverse) {
//   console.log("Palindrome");
// } else {
//   console.log("Not a palindrome");
// }

// An electricity board charges: first 100 units at 5 per unit, next 100 units at 7 per unit, next 100 units at 10 per unit
// and anything above 300 units at 14 per unit. Calculate the bill for a given number of units. Add a fixed surcharge
// of 50 if the bill exceeds 1500.

// let units = 250;
// let bill = 0;

// if (units <= 100) {
//   bill = units * 5;
// } else if (units <= 200) {
//   bill = 100 * 5 + (units - 100) * 7;
// } else if (units <= 300) {
//   bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
// } else {
//   bill = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 14;
// }

// if (bill > 1500) {
//   bill += 50;
// }

// console.log("Total electricity bill: ₹" + bill);



// Write a function isPrime(n) and use it to print all prime numbers between two given numbers.

// function isPrime(start, end) {
//     for (let n = start; n <= end; n++) {
//         let prime = true;

//         if (n <= 1) {
//             prime = false;
//         } else {
//             for (let i = 2; i < n; i++) {
//                 if (n % i === 0) {
//                     prime = false;
//                     break;
//                 }
//             }
//         }

//         if (prime) {
//             console.log(n);
//         }
//     }
// }

// isPrime(10, 50);


// Given an array and a target value, report how many times the target appears, along with its first and last index. If
// it does not appear, report that clearly.


// let arr = [10, 40, 60, 10, 50, 10];

// let count = 0;
// let firstIndex = -1;
// let lastIndex = -1;
// let target = 10;

// for (let i = 0; i < arr.length; i++) {
//   if (target === arr[i]) {
//     count++;

//     if (firstIndex === -1) {
//       firstIndex = i;
//     }

//     lastIndex = i;
//   }
// }

// if (count === 0) {
//   console.log("Target not found");
// } else {
//   console.log("Count:", count);
//   console.log("First index:", firstIndex);
//   console.log("Last index:", lastIndex);
// }

// Given an object where each key is a subject name and each value is the marks, find the total marks, the number
// of subjects, and the subject with the highest marks.

// let marks = {
//   English: 75,
//   Maths: 60,
//   Hindi: 55,
//   Science: 80,

// }

    
// let totalMarks = 0;
// let highestMarks = 0;
// let hightestSubject = "";


// for (let subject in marks) {

// totalMarks = totalMarks + marks[subject]

//   if (marks[subject] > highestMarks) {
//     highestMarks = marks[subject]
//     hightestSubject = subject
//   }
 
// }
// console.log("TotalMarks : ", totalMarks)
// console.log("Hightest Subject :",hightestSubject)
// console.log("Highest Marks",highestMarks)


// An array of employee objects has name and salary. Calculate the total salary, count employees earning above
// 50000 and print the name of the lowest-paid employee.


// let Employees = [
//   {name: "Anmol tiwari", salary: 100000}, { name: "Ram", salary: 50000}, {name: "Yash",salary: 20000},{name: "Shantanu Tiwari",salary: 2000},
// ]


// let lowerSalary = Infinity;
// let lowestPaidEmployee = "";
// let totalSalary = 0;
// let employeesCounter = 0;
// for (let employee of Employees) {

//   totalSalary += employee.salary;
//   if (employee.salary < lowerSalary) {
//     lowerSalary = employee.salary;
//     lowestPaidEmployee = employee.name
//   }
//   if (employee.salary >= 50000) {
//     employeesCounter++
//   }
//   // console.log(employee.salary)
// }
// console.log(lowerSalary)
// console.log(lowestPaidEmployee)
// console.log(totalSalary)
// console.log(employeesCounter)


// Using a do-while loop, repeatedly add the digits of a number until a single digit remains. Also print how many
// rounds it took.

// let number = 9298;
// let round = 0;
// let sum = 0;

// do {
//   let temp = number;
  
//   sum = 0;
//   while (temp > 0) {
//     let digit = temp % 10;
//     sum += digit;
//     temp = Math.floor(temp / 10 )
//   }

//   number = sum;
//   round++;

// } while (number > 9);

// console.log(number)
// console.log(round);
// // console.log(sum)


// A scholarship is given using these rules: marks 90 or more AND attendance 85 or more gets Full; marks 75 or
// more AND attendance 75 or more gets Half; marks 90 or more but attendance below 85 gets Quarter; otherwise
// None. Marks must be 0-100 and attendance 0-100, otherwise print Invalid Input.

// let marks = Number(prompt("Enter the marks"));
// let attendance = Number(prompt("Enter the attendene in number"));

// if (marks >= 90 && attendance >= 85) {
//   console.log("Get full scholoarship");

// }
// else if (marks >= 75 && attendance >= 75) {
//   console.log("More Half")
// }
// else if (marks >= 90 && attendance >= 85) {
//   console.log("Quarter")
// }
// else {
//   console.log("Invalid input")
// }

// An array contains n-1 distinct numbers taken from 1 to n (one number is missing). Find the missing number.

// let arr = [1, 2, 4, 5];
// let n = arr.length + 1;

// let expectedSum = (n * (n + 1)) / 2;

// let actualSum = 0;

// for (let i = 0; i < arr.length; i++) {
//   actualSum += arr[i];
// }

// let missingNumber = expectedSum - actualSum;

// console.log(missingNumber);


//Start with a positive integer n. If n is even, divide it by 2; if odd, replace it with 3n + 1. Repeat until n becomes 1.
// Print the number of steps and the largest value reached.

// let n = 6;
// let steps = 0;
// let largest = n;

// while (n !== 1) {

//   if (n % 2 === 0) {
//     // If even, divide by 2
//     n = n / 2;
//   } else {
//     // If odd, multiply by 3 and add 1
//     n = 3 * n + 1;
//   }

//   steps++;

//   // Update largest value
//   if (n > largest) {
//     largest = n;
//   }
// }

// console.log("Total Steps:", steps);
// console.log("Largest Value:", largest);


// Given a student object {name, age, marks, city}, check whether a given key exists and whether its value is
// truthy-valid (non-empty, non-zero, not undefined). Print an appropriate message for each of the three cases: key
// missing, key present but empty/zero, key present with valid value.


// Print a right-angled triangle of stars with n rows.


let n = Number(prompt("Enter the number"));

for (let i = 1; i <= n; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }

  console.log(pattern);
}
