const http = require('http');
const port = 3000;
const express = require('express');
const app = express();
var path = require('path');
var fs = require('fs');

var comediansJSON = fs.readFileSync(path.join(__dirname + '/builds/js/comedians.json'), 'utf8');
var eventsJSON = fs.readFileSync(path.join(__dirname + '/builds/js/events.json'), 'utf8');

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/builds/index.html')));
app.get('/index.html', (req, res) => res.sendFile(path.join(__dirname + '/builds/index.html')));

app.get('/comedians.html', (req, res) => res.sendFile(path.join(__dirname + '/builds/comedians.html')));

app.listen(3000, function(){
	console.log('Listening on port 3000!');
	console.log(comediansJSON);
	console.log(eventsJSON);
});