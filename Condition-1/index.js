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


// 4. Which angled triangle 
// Given the 3 sides of a triangle, find out whether it is acute-angled, right-angled, or obtuse-angled.
// You need to output 1 for acute, 2 for right-angled, and 3 for an obtuse-angled triangle. You can assume 
// that the input values always form a triangle and are valid integers.

  let a =3;
  let b=4;
  let c=5;


  let lager = 0 ;
     let sum = a**2 +b**2+c**2 ;
     if(a>=b && a>=c){
      lager = a;
     }else if(b>=a && b>=c){
      lager = b
     }else{
      lager = c
     }
    if(2*(lager**2)<sum){
      console.log("1")
    }else if(2*(lager**2) == sum){
      console.log("2")
    } else if(2*(lager**2)> sum){
      console.log("3")
    }


// 4. Equal Heights. 

// You are given 4 integers:
// h1: Gian's initial height
// h2: Suneo's initial height
// v1: The speed at which Gian's height increases (in meters per second)
// v2: The speed at which Suneo's height increases (in meters per second)

// Example 1
// Input
// 4 2 2 4
// Output
// true
  
 
   let h1 =4;
   let h2 =2;
   let v1 =2;
   let v2 =4;
  let result = false;

  if(v1 !== v2){
    let t = (h2 - h1) / (v1 - v2);
    if(t >= 0 && Number.isInteger(t)){
      result = true;
    }
  } else { // v1 == v2
    if(h1 === h2){
      result = true;
    }
  }

  console.log(result)