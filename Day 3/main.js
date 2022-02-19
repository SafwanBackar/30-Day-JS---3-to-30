// var firstName = "Safwan";
// var lastName = "Backar";
// var age = 23;
// var isMarried = false;
// console.log("typeof:" + typeof firstName)
// console.log("typeof:" + typeof age)
// console.log("typeof:" + typeof isMarried)

// console.log(typeof Number("10"))
// console.log(parseInt("9.8"))


// Exercise 2

// var base = prompt("Enter base of triangle");
// var height = prompt("Enter height of triangle");
// alert("Area of triangle = " + base * height * 0.5);


// var length = parseInt(prompt("Enter length of rectangle"));
// var width = parseInt(prompt("Enter width of rectangle"));
// var area = length * width;
// perimeter = 2 * (length + width);
// alert("Area of rectangle = " + area);
// alert("Perimeter of rectangle = " + perimeter);


// y2 = 10;
// y1 = 2;
// x2 = 6;
// x1 = 2;


// console.log("m = " + (y2 - y1) / (x2 - x1));

// var nam = prompt("Enter your name");
// console.log(nam);
// if (nam.length > 7) {
//     alert("Your name is too long");
// } else {
//     alert("Your name is too short");
// }


// let firstName = prompt("Enter your first name")
// let lastName = prompt("Enter your family name")
// if (firstName.length > lastName.length) {
//     alert("Your first name, " + firstName + "is longer than your family name, " + lastName)
// }


// Day 4 

// let a = prompt("Enter any number");
// if (a % 2 === 0) {
//     alert(a + " is an even number")
// } else {
//     alert(a + " is an odd number")
// }

// let value = prompt("Enter the current month");
// let a = value.toLowerCase()
// if (a === "september" || a === "october" || a === "november") {
//     alert("The season is autumn")
// } else if (a === "december" || a === "january" || a === "february") {
//     alert("The season is winter")
// }
// else if (a === "march" || a === "april" || a === "may") {
//     alert("The season is spring")
// }
// else if (a === "june" || a === "july" || a === "august") {
//     alert("The season is summer")
// } else {
//     alert("Read the instruction")
// }

let value = prompt("Enter the current month");
let a = value.toLowerCase();
if (a === "monday" || a === "tuesday" || a === "wednesday" || a === "thursday" || a === "friday") {
    alert(a + "is a working day")
} else if (a === "saturday" || a === "sunday") {
    alert(a + "is a weekend")
}
else {
    alert("Read the instruction")
}