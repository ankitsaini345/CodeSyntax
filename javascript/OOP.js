//Built in constructor
const name1 = "Smith";
const name2 = new String("Smith");
name2.age = 18;
console.log(name1, typeof (name1))  // Smith string
console.log(name2, typeof (name2))  // String {"Smith", age: 18}0: "S"1: "m"2: "i"3: "t"4: "h"age: 18length: 5__proto__: String[[PrimitiveValue]]: "Smith" "object"

if (name1 === name2) {
    console.log("Equal")
} else {
    console.log("Different")
}  // output = Different

// Prototype

function Person(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)

}
Person.prototype.calculate_age = function () {
    var diff_ms = Date.now() - this.dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
const Peter = new Person('Peter', 'Brown', '12-13-1986')
const Alan = new Person('Alan', 'Smith', '5-2-1997')

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}
Person.prototype.setNewLastName = function (newLastName) {
    this.lastName = newLastName
}

console.log(Peter.getFullName())
Peter.setNewLastName('William')
console.log(Peter.getFullName())
console.log(Peter.hasOwnProperty('firstName'))
console.log(Peter.hasOwnProperty('calculate_age'))

// Inheritance
function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.message = function () {
    return `Hello ${this.firstName} ${this.lastName}`
}

const person = new Person('Alan', 'Smith')
console.log(person.message()) // Hello Alan Smith

function Customer(firstName, lastName, phone, email) {
    Person.call(this, firstName, lastName)
    this.phone = phone
    this.email = email
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer
const customer = new Customer('Peter', 'William', '123456', 'email@email.com')

console.log(customer.message()) //Hello Peter William
console.log(customer) // Customer {firstName: "Peter", lastName: "William", phone: "123456", email: "email@email.com"}

// Object Create
const profilePrototype = {
    message: function () {
        return `Hello, I am ${this.firstName} ${this.lastName}`
    },
    setNewLastName: function (newLastName) {
        this.lastName = newLastName
    }

}

const peter = Object.create(profilePrototype)
peter.firstName = 'Peter'
peter.lastName = 'William'
peter.age = 18
peter.setNewLastName('Doe')
console.log(peter.message()) //Hello, I am Peter Doe

const alan = Object.create(profilePrototype, {
    firstName: { value: 'Alan' },
    lastName: { value: 'Smith' },
    age: { value: 30 }
})
console.log(alan.message())  //Hello, I am Alan Smith

// ES6 Classes

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }
    message() {
        return `Hello I am ${this.firstName} ${this.lastName}`
    }
    calculate_age() {
        var diff_ms = Date.now() - this.dob.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    setNewLastName(newLastNAme) {
        this.lastName = newLastNAme
    }
}

const alan = new Person('Alan', 'Smith', '11-13-1980')
alan.setNewLastName('William')
console.log(alan) // Person {firstName: "Alan", lastName: "William", dob: Thu Nov 13 1980 00:00:00 GMT+0530 (India Standard Time)}

// Class Inheritance

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = dob
    }
    message() {
        return `Hello this is ${this.firstName} ${this.lastName}`
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, email) {
        super(firstName, lastName)
        this.phone = phone
        this.email = email
    }
    static boughtItemsFee(item) {
        return item * 100
    }
}

const alan = new Customer('Alan', 'Smith', '123456', 'email@email.com')
console.log(alan) // Customer {firstName: "Alan", lastName: "Smith", dob: undefined, phone: "123456", email: "email@email.com"}
console.log(alan.message()) //Hello this is Alan Smith
console.log(Customer.boughtItemsFee(3)) //300

