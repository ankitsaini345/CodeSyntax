const express = require('express');
const app = express();

app.listen(3000);


app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname })
})
app.get('/add-item', (req, res) => {
    res.sendFile('./views/add-item.html', { root: __dirname })
})

app.use((req, res) => {
    res.sendFile('./views/error.html', { root: __dirname })
})


// using ejs to make dynamic Page
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.listen(3000);


app.get('/', (req, res) => {
    const items = [
        { name: 'mobile phone', price: 1000 },
        { name: 'book', price: 30 },
        { name: 'computer', price: 2000 },
    ]
    res.render('index', { items });
})
app.get('/add-item', (req, res) => {
    res.render('add-item');
})

app.use((req, res) => {
    res.render('error');
})

/* in index.ejs use items and other reusable components like headers or navbars from seprate files using ejs rendring engine
create files like head.ejs
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <title>Document</title>
</head>

// Include it in files

<!DOCTYPE html>
<html lang="en">

<%- include('./partials/head.ejs') %>

<body>
    <%- include('./partials/nav.ejs') %>
    <div class="container">
        <ul class="collection with-header">
            <% if (items.length>0) { %>

            <%  items.forEach(item => { %>
            <li class="collection-item">
                <div><%= item.name%> $<%= item.price%><a href="#!" class="secondary-content"><i
                            class="material-icons">delete</i><i class="material-icons">edit</i></a></div>
            </li>
            <%  }); %>
            <% }else{%>
            <li>There are no items</li>
            <%}%>   
        </ul>
    </div>
</body>
</html>
*/

