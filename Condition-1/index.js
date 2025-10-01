// 1. Student Grade Classification .
// for marks above 90, print "Excellent".
// for marks above 80 and less than equal to 90, print "Good"
// for marks above 70 and less than equal to 80, print "Fair".
// for marks above 60 and less than equal to 70, print "Meets Expectations".
// for marks below 60, print "Below Expectations".
 let n= 95 ;

  if(n>90 && n<=100){
     console.log("Excellent")
  }else if(n>80 && n<=90){
     console.log("Good")
  }else if(n>70 && n<=80){
     console.log("Fair")
  }else if(n>60 && n<=70){
     console.log("Meets Expectations")
  }else{
    console.log("Below Expectations")
  }

// 2. Leap Year  check . 
// A Leap year is the year that is multiple of 4. However, multiples of 100 except for the multiples of 400 are
//  not leap years. Your task is to complete the function isLeapYear which receives the year as its parameter 
//  and returns 1 or 0 depending upon if the year is a leap year or not.


const isLeapYear = (year) => {
    if(year % 4 === 0){
      if(year % 100 === 0){
        if(year % 400 === 0){
          return 1;   // divisible by 400 → leap
        } else {
          return 0;   // divisible by 100, not 400 → not leap
        }
      } else {
        return 1;     // divisible by 4, not by 100 → leap
      }
    } else {
      return 0;       // not divisible by 4 → not leap
    }
  }

  console.log(isLeapYear(1900))



//   3.Character Case Identifier .
// You are required to take input of a character from the user. The task is to print the following
// 1, if the character is a uppercase alphabet(A to Z)
// 0, if the character is a lowercase alphabet(a to z)
// -1, if the character is not an alphabet
let ch = "@"
 if(ch.charCodeAt(0)>=97 && ch.charCodeAt(0)<=122){
    console.log("0")
  } else if(ch.charCodeAt(0)>=65 && ch.charCodeAt(0)<=90){
    console.log("1")
  }else{
    console.log("-1")
  }
  