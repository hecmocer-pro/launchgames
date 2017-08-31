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
  console.log('client socket connected');
  socket.emit('server socket connected');

  socket.on('connect client', () => {
    launchpad.connect(socket);
  });
  socket.on('disconnect client', () => {
    launchpad.disconnect(socket);
  });
  socket.on('launch game', (msg) => {
    switch (msg) {
      case 'snake':
        launchpad.launchSnake();
        break;
      case 'simon-says':
        launchpad.launchSimonSays();
        break;
      case 'fast':
        launchpad.launchFast();
        break;
      case 'minesweeper':
        launchpad.launchMinesweeper();
        break;
      default:
        break;
    }
  });
  socket.on('kill game', (msg) => {
    switch (msg) {
      case 'snake':
        launchpad.killSnake();
        break;
      case 'simon-says':
        launchpad.killSimonSays();
        break;
      case 'fast':
        launchpad.killFast();
        break;
      case 'minesweeper':
        launchpad.killMinesweeper();
        break;
      default:
        break;
    }
  });
});