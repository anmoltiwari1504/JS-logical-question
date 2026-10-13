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

// Find the second largest DISTINCT number in an array without sorting it. If it does not exist, report that clearly.

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
