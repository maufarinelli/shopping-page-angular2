const express = require('express');
const path = require('path');

var app = express();

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/product-list', function(req, res) {
    res.sendFile('server/product-list.json', { root: __dirname });
});

app.get('/categories', function(req, res) {
    res.sendFile('server/categories.json', { root: __dirname });
});

// GET public files
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));

app.listen(9090, function () {
    console.log('App listening on port 9090!');
});