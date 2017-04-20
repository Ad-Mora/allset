var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Node src running on port %s', app.get('port'));
});
