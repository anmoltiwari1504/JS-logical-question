//      1
//      1 2
//      1 2 3
//      1 2 3 4
//      1 2 3 4 5



// for (let i = 1; i <= 5; i++){
//  let row = "";

//   for (let j = 1; j <= i; j++){
//     row =  row + j + ""
//   }

//   console.log(row)
// }


     // 1
    //  2 2 
    //  3 3 3
    //  4 4 4 4
    //  5 5 5 5 5
    
//     for (let i = 1; i <= 5; i++){
//  let row = "";

//   for (let j = 1; j <= i; j++){
//     row =  row + i + ""
//   }

//   console.log(row)
// }


  //  1 2 3 4 5
  //    1 2 3 4
  //    1 2 3
  //    1 2
  //    1

  
// for (let i = 5; i >= 1; i--){
//   let row = ""
//   for (let j = 1;  j <= i ; j++ ) {
//     row = row +  j + ""
//   }
//   console.log(row)
// }


//      5 5 5 5 5 
//      4 4 4 4
//      3 3 3
//      2 2
//      1


// for (let i = 5; i >= 1; i--){
//   let row = "";
//   for (let j = 1; j <= i; j++){
//     row = row + i + ""
//   }
//   console.log(row)
// }


	  //        1  
    // 	     1   2  
   	//  	 1   2   3  
    //    1   2   3   4  
    //  1   2   3   4   5  

// for (let i = 1; i <= 5; i++) {
//   let row = "";

//   //for the extra space

//   for (let j = 1; j <= 5 - i; j++){
//     row += "  "
//   }

//   for (let j = 1; j <= i; j++) {
//     row = row + j + "   ";
//   }

// document.write(row , "<br>")
// }

	//      1
	//    2   3 
	//  4   5   6
	// 7   8   9   10
  
  
//   let num = 1;

// for (let i = 1; i <= 4; i++) {

//   let row = "";

//   // spaces
//   for (let j = 1; j <= 4 - i; j++) {
//     row += "&nbsp;&nbsp;&nbsp;";
//   }

//   // numbers
//   for (let j = 1; j <= i; j++) {
//     row += num + "&nbsp;&nbsp;&nbsp;";
//     num++;
//   }

//   document.write(row + "<br>");
// }


//               1 
//           1   2   3
//       1   2   3   4   5 
//    1   2   3   4   5   6   7 
//  1    2   3   4   5   6   7   8   9



  //    *
    //  * *
    //  * * *
    //  * * * *
    //  * * * * *
 
    
// for (let i = 1; i <= 5; i++) {
//   let row = ""
  
//   for (let j = 1; j <= i; j++){
//     row = row +" * "+ ""
//   }
// console.log(row)
// }


//     * * * * * 
    //  * * * * 
    //  * * * 
    //  * * 
    //  *
    
    
// for (let i = 5; i >= 1; i--){
//   let row = "";
//   for (let j = 1; j <= i; j++){
//     row = row + "*" + ""
//   }
//   document.write(row , "<br>")
// }


//       * * * * *
//        * * * *
//          * * *
//            * *
 //              *
// for (let i = 5; i >= 1; i--) {
//   let row = "";

//   // spaces
//   for (let j = 5; j > i; j--) {
//     row += "&nbsp;&nbsp;";
//   }

//   // stars
//   for (let j = 1; j <= i; j++) {
//     row += "*&nbsp;&nbsp;";
//   }

//   document.write(row + "<br>");
// }