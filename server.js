const express = require('express');
const path = require('path');
const routes = require('./server/routes');

const app = express();

routes(app);

app.get('/', function (req, res) {
    res.sendFile('/index.html', { root: __dirname });
});

// GET public files
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));

app.listen(9090, function () {
    console.log('App listening on port 9090!');
});