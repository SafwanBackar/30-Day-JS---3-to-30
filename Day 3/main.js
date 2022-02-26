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


// Day 7 - Objects

// let dog = { name: 'Rusty', legs: 4, color: 'black', bark: "woof woof" }
// console.log(dog);

// dog.breed = "Doberman"


// Day 9

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

countries.forEach(country => console.log(country))

var upper = countries.map(upper => upper.toUpperCase())

console.log(upper)

var countryLength = countries.map(length => length.length)
console.log(countryLength)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var square = numbers.map(square => square * square)
console.log(square);

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

var price = products.map(price => price.price)
console.log(price);

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
    country.toLocaleLowerCase().includes('land'))

console.log(countriesContainingLand)

const countriesSix = countries.filter((country) =>
    country.length < 7)
console.log(countriesSix)

// Below code doesn't work
var priceVisible = products.filter((price) => price.includes(''))
console.log(priceVisible);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var reduceSum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(reduceSum);

const firstCountriesSix = countries.find((country) =>
    country.length < 7)
console.log(firstCountriesSix)

const norway = countries.findIndex((country) =>
    country.toUpperCase().includes("norway"))
console.log(norway)