// ---------------------
// arithmetic operators
// ---------------------

// question 1 . Circle Area and Perimeter Calculation . 
// ---------> Note: Take pi as 3
// Input Format
// One line contains a number which is the radius of a circle

// Output Format
// Print the area of the circle in the first line
// Print the perimeter of the circle in the second line

// Example 1
// Input
// 4
// Output
// 48
// 24


let area_peremeter = (radius) => {
    const pi = 3;
    console.log(`Area of circle  -> ${pi * radius * radius}`)
    console.log(`Perimeter of circle  -> ${2 * pi * radius}`)
}

// area_peremeter(4)


//  Question 2. Celsius to Fahrenheit,
//     Given a temperature in Celsius, output the fahrenheit equivalent of it.
//     This is similar to the Celsius to Fahrenheit 1 question, read the note below carefully.

//     note ---> Print complete answer up to 6 decimal places.
//     EXAMPLE 1
//     Input:
//     32
//     Output::
//     89.600000

function fahreneit_find(c){
    let f =(c*(9/5))+32 // find fahreneit 
    return f.toFixed(6)  //fixed last 6 decimal places
}

// console.log(fahreneit_find(32))


// Question 3. Basic Arithmetic Operations 
// You are given two positive integers. You have to calculate the result of performing +,-,*,/,% 
// operations on them.
// Example 1
// Input:
// 8 3
// Output:
// 11
// 5
// 24
// 2
// 2

function math(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(Math.floor(a/b));
    console.log(a%b);
}


math(2,3)