 const user = {
     name: 'Alan',
     secret: ' You are handsome',
     getSecret: function () {
         return `Hi, my name is ${this.name}. The secret is ${this.secret}`
     }
 }
 console.log(user.secret)
 
 /* In above code user can read the secret without caling the getSecret method. 
	To overcome this issue we can use module.
*/

const user = (function () {
    let name = 'Alan';
    let secret = ' You are handsome';
    const getSecret = function () {
        return `Hi, my name is ${name}. The secret is ${secret}`
    }
    return {
        getSecret,
    }
})()

console.log(user.getSecret())