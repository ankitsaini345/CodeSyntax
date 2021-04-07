// To run a js file execute node <filename> command

console.log(global) // global object. Similar to windows
global.setTimeout(() => {
    console.log('timeout with global')
}, 3000)
setTimeout(() => {
    console.log('timeout without global')
}, 3000)

console.log(__dirname); // print current directory
console.log(__filename); // Print entire location of file

// Reading/Writing file
const fs = require('fs')
// read file
fs.readFile('./ckmobile/note.txt', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data.toString())
    }
})

// write file
fs.writeFile('note.txt', 'A new message', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('A new message created')
    }
})

// append file
fs.appendFile('note.txt', 'A new message 2\r\n', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('A new message created')
    }
})

// create folder
if (!fs.existsSync('newfolder')) {
    fs.mkdir('newfolder', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log('A new folder created')
        }
    })
} else {
    console.log('The folder already exist')
}

// delete folder
if (fs.existsSync('newfolder')) {
    fs.rmdir('newfolder', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log('The folder deleted')
        }
    })
} else {
    console.log('The folder already deleted')
}
//delete file
if (fs.existsSync('note.txt')) {
    fs.unlink('note.txt', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log('The file is deleted')
        }
    })
} else {
    console.log('The file already deleted')
}

//Seond Example RW file
const fs = require('fs')

const readStream = fs.createReadStream('largetext.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('writeStream.txt');
readStream.on('data', chunk => {
    console.log('##### new chunk #####');
    console.log(chunk)

    writeStream.write('\n #####new chunk #####\n');
    writeStream.write(chunk)
})
stream.pipe()
readStream.pipe(writeStream)

// https://ckmobile.medium.com/buffers-and-streams-in-node-js-d71511291cde
//https://ckmobile.medium.com/how-to-work-with-files-and-directories-using-the-fs-module-in-node-js-a16c9308aea8


// Getting Data from another file
const { users, nums } = require('./users');
console.log(nums);

/*-------users.js--------------    
const users = [{
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
},
{
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://reqres.in/img/faces/8-image.jpg"
}]
const nums = [1, 2, 3]
module.exports = { users, nums }
----------end------------------*/