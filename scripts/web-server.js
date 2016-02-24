var express = require('express');
var path = require('path');
var events = require('./eventsController');
var users = require('./usersController');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.get('/data/event', events.getAll);
app.post('/data/event', events.save);

app.get('/data/user/:id', users.get);
app.get('/data/user/', users.getAll);
app.post('/data/user', users.save);

app.listen(7200);
console.log('Listening on port ' + 7200 + '...');