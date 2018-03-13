const http = require('http');
const port = 3000;
const express = require('express');
const app = express();
var path = require('path');

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/builds/index.html')));

app.listen(3000, function(){
	console.log('Listening on port 3000!');
});