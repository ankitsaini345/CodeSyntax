//document
let doc
doc = document
doc = document.all[1]
doc = document.head
doc = document.body
doc = document.doctype
doc = document.domain
doc = document.URL
doc = document.characterSet
doc = document.contentType
console.log(doc)

doc = document.links
doc = document.links[0].classList
doc = document.links[0].className
doc = document.images
doc = document.scripts
let scripts = document.scripts
let scriptsArray = Array.from(scripts)
scriptsArray.forEach(function (script, index) {
    console.log(index + script.getAttribute('src'))
})
console.log(doc)

//DOM Selextors
let title
title = document.getElementById('name-title')
title = document.getElementById('name-title').id

//change the style
document.getElementById('name-title').style.background = 'red'
document.getElementById('name-title').style.color = 'blue'
document.getElementById('name-title').style.padding = '15px'
document.getElementById('name-title').textContent = 'New title'
document.getElementById('name-title').innerText = 'Another new title'


const nametitle = document.getElementById('name-title')
nametitle.style.background = 'green'
console.log(title)

let item;
item = document.querySelector('#name-title')
item = document.querySelector('.collection-item')
item = document.querySelector('h4')
item = document.querySelector('li')
document.querySelector('.collection-item').style.backgroundColor = 'green'
document.querySelector('.collection-item:last-child').style.backgroundColor = 'red'
document.querySelector('.collection-item:nth-child(3)').style.backgroundColor = 'yellow'
document.querySelector('.collection-item:nth-child(odd)').textContent = 'odd'
console.log(item)

//querySelector
//Returns the first matching Element node within the node's subtree. If no matching node is found, null is returned.
//querySelector* is more flexible, as you can pass it any CSS3 selector, not just simple ones for id, tag, or class. The performance of querySelector* changes with the size of the DOM that it is invoked on
//querySelector* calls run in O(n) time and getElement* calls run in O(1), where n is the total number of all children of the element or document

//querySelectorAll
//Returns a NodeList containing all matching Element nodes within the node's subtree, or an empty NodeList if no matches are found.
//Note: The NodeList returned by querySelectorAll() is not live, which means that changes in the DOM are not reflected in the collection. This is different from other DOM querying methods that return live node lists

//GetElement
//getElement* calls return direct references to the DOM, whereas querySelector* internally makes copies of the selected elements before returning references to them. These are referred to as "live" and "static" elements
//The return types of these calls vary. querySelector and getElementById both return a single element. querySelectorAll and getElementsByName both return NodeLists, being newer functions that were added after HTMLCollection went out of fashion. The older getElementsByClassName and getElementsByTagName both return HTMLCollections.

// Refer https://stackoverflow.com/questions/14377590/queryselector-and-queryselectorall-vs-getelementsbyclassname-and-getelementbyid


// ChildNode
const list = document.querySelector('ul.collection')
const listitem = document.querySelector('li.collection-item')
// console.log('list', list)
// console.log('list item', listitem)
const nodes = document.querySelector('ul.collection').childNodes
// console.log('nodes', nodes)
// console.log('node type', nodes[0].nodeName)
// console.log('node type', nodes[1].nodeName)
document.querySelector('ul.collection').children[0].children[0].id = "special-id"
const children = document.querySelector('ul.collection').children[0].children[0]
console.log('children', children)

// Parent and Sibling
const ul = document.querySelector('ul.collection');
let item = ul.firstChild
item = ul.firstElementChild
item = ul.lastChild
item = ul.lastElementChild
item = ul.childElementCount
let li = ul.firstElementChild
item = li.parentElement
item = li.parentNode
item = li.nextElementSibling
item = li.nextSibling
item = li.nextElementSibling.nextElementSibling
item = li.nextElementSibling.previousSibling

console.log(item)

//Create Element
/* <li class="collection-item" id="new-item" title="New Item">A new list<a class="secondary-content"><i class="material-icons">grade</i></a></li> */

const li = document.createElement('li')
li.className = 'collection-item'
li.id = 'new-item'
li.setAttribute('title', 'New Item')
li.appendChild(document.createTextNode('A new list'))

//create a tag
const link = document.createElement('a')
link.className = 'secondary-content'

//add icon
link.innerHTML = '<i class="material-icons">grade</i>';
li.appendChild(link)
document.querySelector('ul.collection').appendChild(li)

//Replace Element
const oldHeading = document.getElementById('name-title')
const newHeading = document.createElement('h2')
newHeading.id = 'name-title';
newHeading.appendChild(document.createTextNode('New title'));
const header = document.querySelector('.collection-header')
header.replaceChild(newHeading, oldHeading)

//Event Listener
document.querySelector('#submit-btn').addEventListener('click', onClick)

function onClick(e) {
    e.preventDefault() // to prevent default behaviour. page refresh etc
    let item
    item = e.target.classList
    item = e.timeStamp
    item = e.clientX
    item = e.clientY
    item = e.offsetX
    item = e.offsetY
    e.target.innerText = "Hello , i am clicked"
    console.log(item)
}

//Mouse Event
const form = document.querySelector('form')
// form.addEventListener('mouseover', run)
// form.addEventListener('mouseout', run)
form.addEventListener('mouseenter', run)
form.addEventListener('mouseleave', run)
function run(e) {
    e.preventDefault();
    console.log('event type:', e.type)
}

const form = document.querySelector('form')
const submitBtn = document.querySelector('.submit-btn')
const header = document.querySelector('h3')
// submitBtn.addEventListener('click', run)
// submitBtn.addEventListener('dblclick', run)
// submitBtn.addEventListener('mousedown', run)
// submitBtn.addEventListener('mouseup', run)
form.addEventListener('mousemove', run)
function run(e) {
    e.preventDefault();
    console.log('event type:', e.type)
    header.textContent = `x: ${e.offsetX}  y: ${e.offsetY}`
}


// KeyBoard Event

const firstNameInput = document.getElementById('first_name')
firstNameInput.addEventListener('keydown', run)
firstNameInput.addEventListener('keyup', run)
firstNameInput.addEventListener('keypress', run)
function run(e) {
    console.log('Event type: ' + e.type + e.keyCode)
}


const firstNameInput = document.getElementById('first_name')
const heading = document.querySelector('h3')
// firstNameInput.addEventListener('focus', run)
// firstNameInput.addEventListener('blur', run)
// firstNameInput.addEventListener('cut', run)
// firstNameInput.addEventListener('paste', run)
// firstNameInput.addEventListener('copy', run)
firstNameInput.addEventListener('input', run)


function run(e) {
    console.log('Event type: ' + e.type)
    heading.innerText = e.target.value
}


const firstNameInput = document.getElementById('first_name')
const heading = document.querySelector('h3')
const form = document.querySelector('form')
const select = document.querySelector('select')
form.addEventListener('submit', run)
select.addEventListener('change', run)
function run(e) {
    e.preventDefault();

    console.log('Event type: ' + e.type)
    heading.innerText = e.target.value
}

// Event Bubbling
document.querySelector('#first_name').addEventListener('click', function (e) {
  e.stopPropagation() //add this to stop event propogation
  console.log('first name')
})

document.querySelector('.inputform').addEventListener('click', function () {
  console.log('input form ')
})
document.querySelector('.container').addEventListener('click', function () {
  console.log('container')
})
document.addEventListener('click', function () {
  console.log('document')
})

// local and session storage
//set localstorage item
localStorage.setItem("name", "localSmith")
localStorage.setItem("age", "17")
//set sessionstorage item
sessionStorage.setItem("name", "SessionSmith")

// localStorage.removeItem('name')
localStorage.clear()

const age = localStorage.getItem('age')
const localName = localStorage.getItem('name')
const sessionName = sessionStorage.getItem('name')

console.log('age: ', age)
console.log('localName: ', localName)
console.log('sessionName: ', sessionName)

// JSON stringify and parse
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('first_name').value;
    let names;
    if (localStorage.getItem('names') === null) {
        names = []
    } else {
        names = JSON.parse(localStorage.getItem('names'))
    }
    names.push(name)
    localStorage.setItem('names', JSON.stringify(names))
    alert('The name is saved')

})

document.querySelector('.get-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const names = JSON.parse(localStorage.getItem('names'))
    names.forEach(function (name) {
        console.log(name)
    })
})


