//day 7
// 4.
function sum(num1, num2) {
    let addition = num1 + num2;
    return addition
}

// perimeter
function findPerimeter(length, width) {
    let perimeter = 2 * (length + width)
    return perimeter;
}

function findarea(r) {
    let area = Math.PI * r * r
    return area;
}

function findSpeed(distance, time) {
    let speed = distance / time;
    return speed;
    // console.log(speed)
}

function tempConverter(num1) {
    let temp = (num1 * 9 / 5) + 32;
    return temp
}
// BMI
function check(weight, height) {
    // let weight = prompt("Enter your weight in Kg")
    // let height = prompt("Enter your height in m")
    let bmi = weight / (height * height)
    let result = bmi
    if (result < 18.5) {
        return "underweight"
    } else if (result <= 24.9) {
        return "normal weight"
    } else if (result <= 29.9) {
        return "over weight"
    } else if (result > 30) {
        return "obese"
    }

}

function reverseArray(arr) {
    let a = []
    for (var i = arr.length - 1; i >= 0; i--) {
        a.push((arr[i]))
    }
    console.log(a);
}

function capitalizeArray(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        a.push(arr[i].toUpperCase());
    }
    console.log(a);
}

function addItem(item) {
    const zoo = []
    zoo.push(item)
    console.log(zoo)
}


function sumOfNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}

function sumOfOddNumbers(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 2 === 1) {
            sum += i
        }
    }
    return sum
}

function randomUserIp() {
    var ip = (Math.floor(Math.random() * 255) + 1) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255));
    console.log(ip)
}

function hexaGenerator() {
    var it = '1234567890abcdef';
    var hexvalue = ""
    for (let i = 0; i < 6; i++) {
        hexvalue += it.charAt(Math.round(Math.random() * 15))
    }
}
