//Q1: Print numbers from 1 to n (simple loop)

  // const n = Number(prompt("Enter the number"));
  // for (let i = 0; i <= n; i++){
  //   console.log(i);
// }

//  const n = Number(prompt("Enter the number"));
// let i = 0;
// while (i <= n) {
  //   console.log(i) 
  //   i++;
  // }
// const n = Number(prompt("Enter the number"));
// let i = 0;
// do {
//   console.log(i)
//   i++;

// } while (i <= n);

//1 se n tak numbers print karo, lekin.

// const n = Number(prompt("Enter the even number"));
// for (let i = 1; i <= n; i++){
  //   if (i % 2 == 0) {
    //     console.log(i);
    //   }
    // }
// const n = Number(prompt("Enter the even number"));
// let i = 1;
// while (i <= n) {
//   if(i % 2 === 0) {
//     console.log(i);
//    }
//   i++;
// }

//1 se n tak saare numbers print karo jo BOTH conditions satisfy karte ho.
//Number 3 se divisible ho
//Number 4 se divisible ho

// const n = Number(prompt("Enter the number "));
// let i = 1;
// while (i <= n) {
//   if (i % 3 == 0 && i % 4 == 0) {
//     console.log(i)
//   }
//   i++;    
// }

//1 se n tak saare numbers print karo jo:
// Even bhi ho
// Aur 3 se divisible bhi ho
// Yani number should satisfy BOTH conditions.

// const n = Number(prompt("Enter the number"));
// let i = 0;
// while (i <= n) {
//   if (i % 2 == 0 && i % 3 == 0) {
//     console.log(i);
//   }
//   i++;
// }

//1 se n tak saare numbers print karo jo:
// Odd hon
// Lekin 5 se divisible NA ho

// const n = Number(prompt("Enter the number"));
// let i = 0;
// while (i <= n) {
  //   if (i % 2 !== 0 && i % 5 !== 0) {
    //     console.log(i)
    //   }
    //   i++;
    // }
    
    //1 se n tak saare numbers print karo jo:
    // 4 se divisible ho
    // ya 6 se divisible ho
    // But don’t print numbers that are divisible by both
    
    //1 se n tak saare prime numbers print karo.
  
// const n = Number(prompt("Enter the number"));
// for (let i = 1; i <= n; i++){
//   let count = 0;
//   for (let j = 1; j <= i; j++){
//     if (i % j === 0) {
//       count++; 
//     }
//   }
//   if (count == 2) {
//     console.log(i)
//   }
  
// } 

//Print odd numbers from 1 to n.
// const n = Number(prompt("Enter the number"));
// let i = 1;
// while (i <= n) {
//   if (i % 3 == 0) {
  //     console.log(i)
  //   }
  //   i++;
  // }
  
  //Sum of all numbers from 1 to n that are divisible by 3 or 5.
  
// const n = Number(prompt("Enter the number"));
// let sum = 0;
// for (let i = 0; i <= n; i++){
  //   if (i % 3 === 0 || i % 5 === 0) {
    
  //     sum += i;   
  //   }
// }
// console.log(sum)

//Print all numbers from 1 to n that are divisible by 4 but NOT divisible by 6
// const n = Number(prompt("Enter the number"));
// for (let i = 0; i <= n; i++){
//   if (i % 4 == 0 && i % 6 !== 0) {
//     console.log(i)
//   }
// }

//1 se n tak un numbers ka count print karo
// jo 2 aur 3 dono se divisible ho.

// const n = Number(prompt("Enter the number"));
// for (let i = 1; i <= n; i++){
//   if (i % 2 == 0 && i % 3 == 0) {
//     console.log(i);
//   }
// }

//1 se n tak un numbers ka sum find karo
// jo even bhi ho aur 5 se divisible bhi ho.
// const num = Number(prompt("Enter The Number"));
// let count = 0;
//   for (let i = 1; i <= num; i++){
//     if (i % 2 === 0 && i % 5 === 0) {
//       count++;
//     }
//   }
//   console.log(count)
// 
// let n = Number(prompt("Enter the number"));
// let reverse = 0;
// while (n > 0) {
  //   let digit = n % 10;
  //   reverse = reverse * 10 + digit;
  //   n = Math.floor(n / 10);

// }
// console.log(reverse);

// Given a number, find the sum of its digits.
// let n = Number(prompt("Enter the number"));
// let sum = 0;
// while (n > 0) {
//   let digit = n % 10;
//   sum += digit;
//   n = Math.floor(n / 10);
// }
// console.log(sum)

//Given a number, count how many digits it has.

// let n = Number(prompt("Enter the number"));
// let count = 0;
// while (n > 0) {
//   count++;
//   n = Math.floor(n / 10);
// }
// console.log(count);

//check the palindrome number.

// let n = Number(prompt("Enter the number"));
// let reverse = 0;
// let original = n;
// while (n > 0) {
//   let digit = n % 10;
//   reverse = reverse * 10 + digit;
//   n = Math.floor(n / 10)
// }
// if (original === reverse) {
//   console.log("it is the palindrome")
// } else {
//   console.log("It is not a palindorme number")
// }
// console.log(reverse)  

//Take a number from the user and count how many digits are EVEN in that number.

// let n = Number(prompt("Enter the number"));
// let count = 0;
// while (n > 0) {
//   let digit = n % 10; 
//   if (digit % 2 === 0) {
//     count++;
  
//   };
//   n = Math.floor(n / 2);

// }
//  console.log(count);

// Write a JS code that takes a number and prints:
// Total even digits.
// Total odd digits.

// let n = Number(prompt("Enter the number"));
// counteven = 0;
// countodd = 0;
// while (n > 0) {
//   let digit = n % 10;
//   if (digit % 2 === 0) {
//     counteven++;
//   }
//   else {
//     countodd++;
//   }
//   n = Math.floor(n / 10);
// }
// console.log("Even", counteven);
// console.log("Odd", countodd);

//Count How Many Digits Are Prime in a Number.

// let n = Number(prompt("Enter the number"));
// let count = 0;
// while (n > 0) {
//   let digit = n % 10;
//   if (digit === 2 || digit === 5 ||digit === 7||digit === 9 ) {
//     count++;
//   }
//   n = Math.floor(n / 10);
// }
// console.log("prime number" + `${count}` + " is");

//Ek number input lo.
//Us number ke digits ka sum nikalo using while loop.

// let num = 2503;
// let sum = 0;
// while (num >0 ) {
//   let digit = num % 10;
//   sum += digit;
//   num = Math.floor(num / 10);

// }
// console.log(sum);

//: Find the product of digits of a number
// Number input lo
// Uske har digit ko multiply karo
// Output me product print karo

// let number = 5322;
// let product = 1;
// while (number > 0) {
//   let digit = number % 10;
//   product *= digit;
//   number = Math.floor(number / 10);
// }
// console.log(product)

//Aapko ek number diya hoga.
//Us number me jitne digits 5 se bade hain, unka count print karo.

// let number = 24954803;
// let count = 0;
// while (number > 0) {
//   let digit = number % 10;
//   if (digit > 5) {
//     count++
//   }
//   number = Math.floor(number / 10);
// }
// console.log(count)

//Largest Digit in a Number
// Task:
// Number input lo
// Us number me sabse bada digit find karo
// Output me print karo

  // let number = 432758652;
  // let temp = number; 
  // let larger = 1; 
  // while (temp > 0) {
  //   let digit = temp % 10;
  //   if (digit > larger) {
  //     larger =  digit
  // }
  //   temp = Math.floor(temp / 10);
  // }

  // console.log(larger)
  
//864203
//Is number me maximum digit kaun sa hai?

// let number = 864203;
// let temp = number;
// let largenumber = 0;
// while (temp > 0) {
//   let digit = temp % 10;
//   if (digit > largenumber) {
//     largenumber = digit;

//   }
//   temp = Math.floor(temp / 10);

// }
// console.log(largenumber)

//1️: Tumhare paas ek number hai: 5834029
// Isme se smallest digit (sabse chhota digit) find karna hai without using Math.min.
// Sirf loop + % + Math.floor() ka use karna hai.

// let number = 5834129;
// let temp = number;

// let smallest = temp % 10;  // pehla digit store

// while (temp > 0) {
//   let digit = temp % 10;
//   if (digit < smallest) {
//     smallest = digit;
//   }
//   temp = Math.floor(temp / 10);
// }

// console.log(smallest);

//Count how many digits of a number are PERFECT SQUARE digits.
// let number = 971426;
// let temp = number;
// let square = 0;
// while (temp > 0) {
//   let digit = temp % 10;
//   if (digit == 1 || digit == 4 || digit == 9) {
//     square++;
//   }
//   temp = Math.floor(temp / 10);

// }

// console.log(square)

//Given a number, count how many digits are EVEN. 
// let number = 39483;
// let temp = number;
// let count = 0;
// while (temp > 0) {
//   let digit = temp % 10; //last digit kaam karne ke liye decimal ke form me.
//   if (digit % 2 === 0) {
//     count++;
//   }
//   temp = Math.floor(temp / 10);

// }
// console.log(count)

//Given a number, count how many digits are GREATER than 5.
// let number = 7457324;
// let greater = 0;
// let count = 0;

// let temp = number;
// while (temp > 0) {
//   let digit = temp % 10;
//   if (digit > 5) {
//     greater = digit;
//     count++
//   }
//   temp = Math.floor(temp / 10);
  
// }
// console.log(count);

//Given a number, find the SUM of all digits.

// let number = 4985;
// let sum = 0;
// while (number > 0) {
//   let digit = number % 10;
//   sum += digit;
//   number = Math.floor(number /10)
// }
// console.log(sum);

//Count how many digits are odd in a number.

// let number = 7530913274;
// let oddnumber = 0;
// while (number > 0) {
//   let digit = number % 10;
//   if (digit % 2 !== 0) {
//     oddnumber++;
//   }
//   number = Math.floor(number / 10);
// }
// console.log(oddnumber)


//Palindrome Number
// let number = 121;
// let original = number;
// let reverse = 0;

// while (number > 0) {
//   let digit = number % 10;
//   reverse = reverse * 10 + digit;
//   number = Math.floor(number / 10)
  
// }

// if (original === reverse) {
//   console.log("Palindrome")
// }
// else {
//   console.log("not palindrome ")
// }  


