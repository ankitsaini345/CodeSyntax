//console types
console.clear()
console.log('Hello')
console.log(123)
console.log(true)
var message = 'This is a new message'
console.log(message)
console.log([1, 2, 3])
console.log({
    name: 'John',
    age: 18
})
console.table({
    name: 'John',
    age: 18
})
console.error("Error!!")
console.warn("Warning!!")
console.time('time')
console.log('timing')
console.timeEnd('time')

//Variables
var name = "Alan Smith"
console.log(name)
name = "John William"
console.log(name)

var message
console.log(message)
message = "New message"
console.log(message)

//letters, number, _ , $
//X start with numbers
var $name = 'Some name'

var firstName //CamelCase
var last_name //underscore
var FirstName //PascalCase

// data types
//primitive
//undefined
let item

//String
item = 'Hello'
//Number
item = 1
//Boolean
item = true
//Null
item = null
//Symbol
item = Symbol()

//Reference type
//array
item = [1, 2, 4]
//object
item = {
    name: 'Alan'
}
//Date
item = new Date()
console.log('type', typeof item)

//primitive vs Refrence
let user = { name: "Alan" }
function message(user) {
    user.name = "Peter"
    console.log("user inside function: ", user.name)
}
message(user)
console.log(user.name)
//output
// user inside function:  Peter
// Peter

//convert to string
let val;
//number to string
val = 999
val = String(val)

//boolean to string
val = true
val = String(val)

//date to string
val = new Date()
val = val.toString()
//Array to string

val = [1, 2, 3]
val = val.toString()

console.log(val)
console.log(typeof val)
console.log(val.length)

// Math

const num1 = 8
const num2 = 6
let val
//Addition
val = num1 + num2
//Subtraction
val = num1 - num2
//Multiplication
val = num2 * num1
//Division
val = num1 / num2
//Modulus (Remainder)
val = num1 % num2

//Math Object
val = Math.PI
val = Math.round(8.7)
val = Math.round(8.4)
val = Math.pow(8, 2)
val = Math.sqrt(64)
val = Math.abs(-4)
val = Math.ceil(8.1)
val = Math.floor(8.9)
val = Math.min(2, 6, 1)
val = Math.max(2, 6, 1)

//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
val = Math.random()
//Random between 1 to 5
val = Math.floor(Math.random() * 5 + 1)
console.log(val)

// String operations
const firstName = 'Alan'
const lastName = 'Smith'

let val;

//concatenate
val = firstName + lastName
val = firstName + ' ' + lastName
//Append
val = 'Alan'
val += 'Smith'

//Escaping
val = "That's great. You've found a job"
val = 'That \'s great. You\'ve found a job'

//length
val = firstName.length

//concat
val = firstName.concat(' ', lastName)
//change case
val = firstName.toUpperCase()
val = firstName.toLowerCase()

console.log(val)

const firstName = 'alan'
const lastName = 'smith'
const sentence = 'Hello, I am Alan Smith'
const tags = 'javascript,javascript course,javascript tutorial'

let val;

val = firstName[2]
//indexof
val = firstName.indexOf('a')
val = firstName.lastIndexOf('a')
val = firstName.indexOf('o')

//charAt()
val = firstName.charAt('1')

//last character,
val = lastName.charAt(lastName.length - 1)
//substring
val = lastName.substring(0, 3)
val = lastName.substring(1, 3)


//slice 
val = lastName.slice(0, 3)
val = lastName.slice(1, 3)

//split
val = tags.split(',')
//replace
val = sentence.replace('Alan', 'John')
//includes, test something inside the string.
val = sentence.includes('Mary')

console.log(val)

let name = 'Alan'
let age = 5
let drinking = 'beer'
let message;

function drink() {
    if (age > 18) {
        return 'beer'
    } else {
        return 'coke'
    }
}


// message = 'Hello, my name is ' + name + '. I love drinking ' + (age > 18 ? 'beer' : 'coke')
message = `Hello, my name is ${name}. I love drinking ${age > 18 ? 'beer' : 'coke'}`
console.log(message)

//Array
onst arr1 = [30, 50, 40]
const arr2 = new Array(80, 20)
const users = ['Alan', 'Peter', 'Ben', 'John']
const anything = ['Alan', 3, null, undefined, false, { name: 'Alan', age: 30 }, new Date()]

let val
val = arr1.length
//check whether is array
val = Array.isArray(arr1)

arr1[2] = 'last item'
console.log(arr1)

//Objects
const user = {
    id: 7,
    email: "michael.lawson@reqres.in",
    dob: 1987,
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
    department: {
        name: 'IT',
        position: 'programmer'
    },
    tasks: ['creating apps', 'meetings'],
    getAge: function () {
        return new Date().getFullYear() - this.dob
    }

}

let val
val = user.first_name
val = user['last_name']
val = user.dob
val = user.tasks[1]
val = user.department['position']
val = user.getAge()
// console.log(val)
for (let i = 0; i < user.tasks.length; i++) {
    const element = user.tasks[i];
    console.log(element)

}

//Date Object
let val
let d = new Date('12-25-2020 11:30:00')
d = new Date('12/25/2022').getDay()
d = new Date('December 25 2021')
console.log(d)
// console.log(val)

//function declaration
function user(name = 'Mary', age = 80) {

    return `Hello, my name is ${name}. I am ${age} years old`
}
console.log(user())
// console.log(user('Alan', 18))

const person = {
    hello: function () {
        console.log('Hello')
    },
    age: function (age) {
        console.log(`I am ${age} years old`)
    }
}

person.laugh = function () {
    console.log('Ha ha ')
}

person.hello()
person.age(18)
person.laugh()

// //FOR loop
// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         console.log('Three');
//         continue;
//     }

//     if (i === 6) {
//         console.log(i);
//         break;
//     }
//     console.log(i)

// }

//WHILE loop
// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++;
// }

//Do while
let i = 10000

do {
    console.log(i)
    i++
} while (i < 10);

const users = ['Alan', 'Peter', 'John']

//For loop
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);

// }

//For of 
// for (const user of users) {
//     console.log(user)
// }

//For each
// forEach is a method on the Array prototype. It iterates through each element of an array and passes it to a callback function.
// users.forEach(function (user, index, arr) {
//     console.log(index, user, arr)
// });

//For in 
//This loop was introduced in ES6 as a tool to use with enumerables to iterate over the properties of the object:
let person = {name: "SpongeBob", lastName: "SquarePants", age:  34}
for (let property in person) {
  console.log(`${property}: ${person[property]}`);
}
///// RESULT:
// "name: SpongeBob"
// "lastName: SquarePants"
// "age: 34"

//When iterating over arrays, for...in is much slower than the for...of loop that is specific to arrays, strings, and NodeLists.

//map 

// const hiUsers = users.map(function (user) {
//     return `Hi, ${user}`
// });

// console.log(hiUsers)

//For in 
const user = {
    name: 'Alan',
    age: 19,
    title: 'Programmer'
}

for (const key in user) {
    console.log(`${key}: ${user[key]}`)
}

//https://betterprogramming.pub/difference-between-javascript-loops-for-foreach-for-of-and-for-in-91cd8fe884fd

//Window methods
//Alert
//alert('Hello')

//Prompt
// const name = prompt('What is your name?')
// alert(`Hello, ${name}`)

//Confirm
if (confirm('Are you sure to delete?')) {
    alert('The file is deleted')
} else {
    alert('Nothing is deleted')
}


//outer width and height
let oh = window.outerHeight;
let ow = window.outerWidth;
// console.log(oh, ow)

//inner width and height
let ih = window.innerHeight;
let iw = window.innerWidth;
// console.log(ih, iw)
//scroll points
let sy = window.scrollY;
let sx = window.scrollX;
// console.log(sx, sy)

//Location object
let val;
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Redirect
// window.location.href = "http://www.google.com"
//Reload
// window.location.reload()

//History
// window.history.go(-2)
//Navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;
console.log(val)

