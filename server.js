var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var MessageController = require('./controllers/MessageController');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:allset');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/message', MessageController.handleMessage);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Node src running on port %s', app.get('port'));
});
