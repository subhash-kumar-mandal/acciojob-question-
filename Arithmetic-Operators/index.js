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
    const  pi = 3 ;
    console.log(`Area of circle  -> ${pi*radius*radius}`)
    console.log(`Perimeter of circle  -> ${2*pi*radius}`)
}

area_peremeter(4)