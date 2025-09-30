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