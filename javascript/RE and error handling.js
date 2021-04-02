// try catch
const person = { name: 'Alan' }
try {
    if (!person.email) {
        throw new TypeError('email not exist')
    }

} catch (error) {
    console.log(error.message)
} finally {
    // console.log('close file')
}

console.log('continue')

// Regular expression
let re;
re = /hello/ig;
console.log(re.source)

//exec()
// const result = re.exec('Hello everyone')
// // console.log(result)
// // console.log(result[0])
// // console.log(result.index)
// console.log(result.input)

//match()
// const string = 'Hello, everyone, Hello';
// const result = string.match(re)
// console.log(result)

//test()
// const result = re.test('Hello')
// console.log(result)

//search()
// const string = 'Hi, Hello, Hello';
// const result = string.search(re)
// console.log(result)

//replace()
const string = 'Hi, Hello, Hello';
const result = string.replace(re, 'hey');
console.log(result)

const str = "The dog is running in the street. Alan, who is 18 years old, looking for the dog under the tree."
let re
re = /n+/g //one n or more n
re = /ni?/g // n or n with i 
re = /un*/g //* =  + ?
re = /.ee/g
re = /\./g
re = /\w/g
re = /\d/g
re = /\s/g
re = /\S/g


const result = str.match(re);
console.log(result)

const str = "HiHi. The dog is running in the street. Alan, who is 18 years old, looking for the 5g mobile phone under the tree."
let re;
re = /\w{4,5}/g;
re = /[a-zA-Z]o/g;
re = /[0-9]g/g;
re = /(t|T)he/g;
re = /(o|n){2,3}/g;
re = /(hi){2,3}/ig;
re = /^H/g;
re = /\.$/g;

const result = str.match(re)
console.log(result)

