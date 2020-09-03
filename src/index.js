var express = require('express');
var app = express();
var ct = require('./constant')
app.get('/', function (req, res) {
    res.send('Hello This node.js and express.js sample test from ' + ct);
});

app.post('/', function (req, res) {
    res.send(req);
});

app.listen(9030, function () {
    console.log('App listening on port 9030!');
});