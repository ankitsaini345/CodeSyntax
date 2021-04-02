// Status Codes https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// Fake JSON Data  https://reqres.in/

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
        }
    }

    xhr.send()
}

//XHR ReadyState https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);
    xhr.onprogress = function () {
        console.log('onprogress ready state', this.readyState)
    }
    xhr.onload = function () {
        console.log('onload readystate', this.readyState)
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }
    // xhr.onreadystatechange = function () {
    //     console.log('ready state', xhr.readyState)
    //     if (this.readyState === 4 && this.status === 200) {
    //         console.log(this.responseText)
    //     }
    // }
    xhr.onerror = function () {
        console.log('error readystate', this.readyState)
        console.log('error occur')
    }

    xhr.send()
}

// Get JSON Data
document.getElementById('button1').addEventListener('click', loadUser)

function loadUser() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'user.json', true)
    xhr.onload = function () {
        if (this.status === 200) {
            const user = JSON.parse(this.responseText)
            const output = `
            <ul class="collection">
        <li class="collection-item avatar">
            <img src="${user.avatar}" alt="" class="circle">
            <span class="title">${user.first_name} ${user.last_name}</span>
            <p>email: ${user.email}
               
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <ul>
            `;
            document.getElementById('user').innerHTML = output
        }
    }
    xhr.send()
}

// Get JSON Array
function loadUsers() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'users.json', true)
    xhr.onload = function () {
        if (this.status === 200) {
            const users = JSON.parse(this.responseText)
            let output = '<ul class="collection">'
            users.forEach(user => {
                output += `
                
                <li class="collection-item avatar">
                <img src="${user.avatar}" alt="" class="circle">
                <span class="title">${user.first_name} ${user.last_name}</span>
                <p>email: ${user.email}
                   
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                </li>
                
                `;
            });
            output += '</ul>'
            document.getElementById('users').innerHTML = output
        }
    }
    xhr.send()

}

// Get Remote Data
document.getElementById('getdata').addEventListener('click', getData)

function getData(e) {
    e.preventDefault();
    const number = document.getElementById('number').value
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)
    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText)
            let output = '';
            if (response.type === 'success') {
                response.value.forEach(function (item) {
                    output += `<li>${item.joke}</li>`
                })
            } else {
                output += '<li>There is an error</li>'
            }
            document.querySelector('.jokes').innerHTML = output;
        }
    }
    xhr.send()
}


// Callback function
const todos = [
    { title: "First todo", body: "This is first todo" },
    { title: "Second todo", body: "This is third todo" }
]

function createTodo(todo, callback) {
    setTimeout(function () {
        todos.push(todo)
        callback()
    }, 2000)
}

function getTodos() {
    setTimeout(() => {
        let output = ''
        todos.forEach(function (todo) {
            output += `<li>${todo.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

createTodo({ title: 'Third todo', body: "This is third todo" }, getTodos)

// Creating custom Library
// myhttp.json
// start
function myHTTP() {
    this.http = new XMLHttpRequest();
}

myHTTP.prototype.get = function (url, cb) {
    this.http.open('GET', url, true)
    this.http.onload = function () {
        if (this.status === 200) {
            cb(null, this.responseText)
        } else {
            cb('There are errors ' + this.status)
        }
    }
    this.http.send()
}
myHTTP.prototype.post = function (url, data, cb) {
    this.http.open('POST', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')
    this.http.onload = function () {

        cb(null, this.responseText)

    }
    this.http.send(JSON.stringify(data))
}
myHTTP.prototype.put = function (url, data, cb) {
    this.http.open('PUT', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')
    this.http.onload = function () {

        cb(null, this.responseText)

    }
    this.http.send(JSON.stringify(data))
}
myHTTP.prototype.delete = function (url, cb) {
    this.http.open('DELETE', url, true)
    this.http.onload = function () {
        if (this.status === 200) {
            cb(null, 'The post is deleted')
        } else {
            cb('There are errors ' + this.status)
        }
    }
    this.http.send()
}
//end

//using library
// start
const http = new myHTTP();
// const posts = http.get('https://jsonplaceholder.typicode.com/posts', function (err, res) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(res)

//     }
// })

const data = {
    title: ' A new title',
    body: 'This is a new post'
}
http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, res) {
    if (err) {
        console.log(err)
    } else {
        console.log(res)

    }
})
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, res) {
    if (err) {
        console.log(err)
    } else {
        console.log(res)

    }
})
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, res) {
    if (err) {
        console.log(err)
    } else {
        console.log(res)

    }
})

// end

// es6 Promise
const todos = [
    { title: "First todo", body: "This is first todo" },
    { title: "Second todo", body: "This is third todo" }
]

function createTodo(todo) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            todos.push(todo)
            const err = false
            if (!err) {
                resolve()

            } else {
                reject('There is an error')
            }
        }, 2000)

    })
}

function getTodos() {
    setTimeout(() => {
        let output = ''
        todos.forEach(function (todo) {
            output += `<li>${todo.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

createTodo({ title: 'Third todo', body: "This is third todo" }).then(getTodos).catch(function (err) {
    console.log(err)
})


// Fetch API
document.getElementById('button1').addEventListener('click', getText)

function getText() {

    fetch('test.txt').then(function (res) {
        return (res.text())
    }).then(function (data) {
        document.getElementById('output').innerText = data
    }).catch(function (err) {
        console.log('ERROR: ' + err)
    })
}

// Fetch JSON fileCreatedDate
document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJSON)
function getText() {

    fetch('test.txt').then(function (res) {
        return (res.text())
    }).then(function (data) {
        document.getElementById('output').innerText = data
    }).catch(function (err) {
        console.log('ERROR: ' + err)
    })
}

function getJSON() {

    fetch('todos.json').then(function (res) {
        return (res.json())
    }).then(function (todos) {
        let output = '';
        todos.forEach(todo => {
            output += `<li>${todo.title}</li>`
        });
        document.getElementById('output').innerHTML = output
    }).catch(function (err) {
        console.log('ERROR: ' + err)
    })
}

// Arrow Function
const greeting = (firstName, lastName) => console.log(`Hello, my name is ${firstName} ${lastName}`)
greeting('Tom', 'Smith')

// Conver to arrow function
document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJSON)
function getText() {

    fetch('test.txt').then(res => res.text()
    ).then(data => {
        document.getElementById('output').innerText = data
    }).catch(err =>
        console.log('ERROR: ' + err)
    )
}

function getJSON() {

    fetch('todos.json').then(res => res.json()
    ).then(todos => {
        let output = '';
        todos.forEach(todo => {
            output += `<li>${todo.title}</li>`
        });
        document.getElementById('output').innerHTML = output
    }).catch(err =>
        console.log('ERROR: ' + err)
    )
}

// http library with fetch
// myhttp.js   start
class myHTTP {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))

        })
    }
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))

        })
    }
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))

        })
    }
    delete(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(() => resolve('Deleted successfully'))
                .catch(err => reject(err))

        })
    }
}  // end

//using library
const http = new myHTTP();
// http.get('https://jsonplaceholder.typicode.com/posts').then(data => console.log(data)).catch(err => console.log(err))

const data = {
    title: ' A new title',
    body: 'This is a new post'
}
// http.post('https://jsonplaceholder.typicode.com/posts', data).then(data => console.log(data)).catch(err => console.log(err))
// http.put('https://jsonplaceholder.typicode.com/posts/1', data).then(data => console.log(data)).catch(err => console.log(err))
http.delete('https://jsonplaceholder.typicode.com/posts/1').then(data => console.log(data)).catch(err => console.log(err))


// Async Await

const message = async () => 'You have new message'

message().then(res => console.log(res))

const getTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/toidos')

    if (res.ok) {
        const data = await res.json()
        return data

    } else {
        throw new Error('Something went wrong')
    }
}
getTodos().then(todos => console.log(todos)).catch(err => console.log(err))

// http library fetch and async await
// myhttps.js    start
class myHTTP {
    async get(url) {
        const res = await fetch(url)
        const data = await res.json()
        return data

    }
    async post(url, post) {

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        const data = await res.json()
        return data
    }
    async put(url, post) {

        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        const data = await res.json()
        return data

    }
    async delete(url, post) {

        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })

        const data = await 'Deleted successfully'
        return data

    }
} // end

//use
const http = new myHTTP

// get posts
// http.get('https://jsonplaceholder.typicode.com/posts').then(data => console.log(data)).catch(err => console.log(err))

//user data
const data = {
    title: 'Custom title',
    body: 'this is a custom post'
}

//create post
// http.post('https://jsonplaceholder.typicode.com/posts', data).then(data => console.log(data)).catch(err => console.log(err))

//update post
// http.put('https://jsonplaceholder.typicode.com/posts/2', data).then(data => console.log(data)).catch(err => console.log(err))

// //delete post
http.delete('https://jsonplaceholder.typicode.com/posts/2').then(data => console.log(data)).catch(err => console.log(err))





