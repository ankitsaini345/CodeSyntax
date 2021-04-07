const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
	console.log('request url', req.url);
    console.log('request method', req.method)
    res.setHeader('Content-Type', 'text/html');
    res.write('<body class="app"></body>');
    res.write('<p>This is Node.js</p>')
    res.end();
});
server.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// Sending html file in response
const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./view/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);

        }
    })
});
server.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// using routes in basic http 
//https://ckmobile.medium.com/how-to-use-the-req-object-in-in-node-js-385279fd7424
//https://ckmobile.medium.com/how-to-create-a-http-server-in-node-js-65191d1552c3

const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let route = "./views/";

    switch (req.url) {
        case '/':
            route += 'index.html';
            res.statusCode = 200;
            break;
        case '/contact':
            route += 'contact.html';
            res.statusCode = 200;
            break;
        case '/contact-us':

            res.statusCode = 301;   // redirecting to another url
            res.setHeader('Location', '/contact');
            res.end()
            break;

        default:
            route += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(route, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);

        }
    })
});
server.listen(port, () => {
    console.log(`listening on port ${port}`)
})



