"use strict";

const express = require('express');
const path = require('path');
const app = express();
const launchpad = require('./launchpad.js');

// Server config //
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/index.html'));
});
app.use(express.static(__dirname + '/client'));
var server = app.listen('8080');

// Socket config //
var io = require('socket.io').listen(server);

io.on('connection', function(socket){
  console.log('a browser connected');

  socket.emit('server connected');

  socket.on('connect client', launchpad.connect);
  socket.on('disconnect client', launchpad.disconnect);
});