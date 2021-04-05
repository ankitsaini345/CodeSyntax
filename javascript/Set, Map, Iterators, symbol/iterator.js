function makeItemIterator(items) {
    let nextIndex = 0;
    const itemIterator = {
        next: function () {
            let result;
            result = nextIndex < items.length ? {
                value: items[nextIndex++],
                done: false
            } : {
                    done: true
                }
            return result;
        }
    }
    return itemIterator;
}
const itemsArr = ['Milk', 'Apple', 'Fish'];
const itemIterator = makeItemIterator(itemsArr);
// console.log(itemIterator.next())
// console.log(itemIterator.next())
// console.log(itemIterator.next())
// console.log(itemIterator.next())
// console.log(itemIterator.next())

function* makeItemGenerator(items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i];

    }
}
const itemGenerator = makeItemGenerator(itemsArr);
let result = itemGenerator.next()
while (!result.done) {
    console.log('generator result:', result)
    result = itemGenerator.next()
}

//Example
const users = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
    }]

document.querySelector('.btn-primary').addEventListener('click', nextUser)
function makeUserIterator(users) {
    let nextIndex = 0;
    const userIterator = {
        next: function () {
            let result;
            result = nextIndex < users.length ? { value: users[nextIndex++], done: false } : { done: true }
            return result;
        }
    }
    return userIterator
}
const userIterator = makeUserIterator(users)
nextUser();
function nextUser() {
    const user = userIterator.next().value
    console.log(user)
    if (user !== undefined) {

        document.querySelector('.card-title').innerText = `${user.first_name} ${user.last_name}`;
        document.querySelector('.card-text').innerText = `email: ${user.email}`;
        document.querySelector('.card-img-top').src = user.avatar;
    } else {
        window.location.reload()
    }
}