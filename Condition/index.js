// 1. Number Comparison
// If the number is greater than 1, then return You entered more
// If the number is less than or equal to 1 then return You entered less
// Example 1
// Input
// 1
// Output
// You entered less
let n=7;
 if(n<=1){
    console.log("You entered less")
  }else{
    console.log("You entered more")
  }


// Question 2. Quadrants
// Four friends are in a mystery room and they aim to get out of the mystery room by cracking the final trail. The mystery room is divided into four chambers and each chamber will have two boxes storing balls. Now if both the boxes have blue balls, it must belong to chamber 1. Similarly if the first box has red balls and second box has blue balls, they must belong to chamber 2. If both the boxes have red balls, they must belong to chamber 3. Finally if the first box has blue balls and second box has red balls, it must belong to chamber 4.
// You are given number of balls in each box and if the number has a negative sign it means the balls are red else the balls are blue if the sign is positive. Determine the chamber the two boxes belong to given the number and type of balls in each box.
// Note: Assume there will always be non-zero number of balls in each box.
// Example 1
// Input
// 10
// 6
// Output
// 1

let x = 10 , y= 6

    if(x>0 && y>0){
      console.log("1")
    }else if(x<0 && y>0){
      console.log("2");
    }else if(x<0 && y<0){
      console.log("3")
    }else if(x>0 && y<0){
      console.log("4")
    }

// 3. Verify Cube
// Take two positive integers from the user. Verify if (a+b)^3 = a^3 + b^3 + 3a^2b + 3ab^2.
// Calculate the Left hand side (LHS) and the right hand side (RHS) of the equation. Print the (LHS) and the (RHS).
// Print VERIFIED in uppercase if they are equal, otherwise print NOT VERIFIED.
// Example 1
// Input:
// 4 5
// Output:
// 729
// 729
// VERIFIED
     let a= 4 , b =5 ;
     let lhs = (a+b)**3
     let rhs = a**3 + b**3 +3*a**2*b +3*a*b**2
     console.log(lhs);
     console.log(rhs);
     if(rhs===lhs){
      console.log("VERIFIED")
     }else{
      console.log("NOT VERIFIED")
     }