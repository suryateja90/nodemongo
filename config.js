var express = require('express');
var db = require('./model');
var bodyParser = require('body-parser');
var app = express();
var http = require('http');
var data = new db();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.post('/summer', function(req, res) {
    db.save(req.body, function(err, result) {
        if(!err) {
            res.send('created collection');
        } else {
            res.send('create collection failed');
        }
    })
})
// data.collection.save

app.get('/summer', function(req, res) {
db.find((err, result) => {
    if(err) {
        res.send('fetch failed').status(400);
    } else {
        res.send(result).status(200);
    }
})
})

app.listen('8080');