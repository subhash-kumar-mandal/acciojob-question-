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
  