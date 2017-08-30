"use strict";

var express = require('express');
var path = require('path');
var app = express();

const Launchpad = require( 'launchpad-mini' );
let pad = new Launchpad();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});
// app.use('/static', express.static(path.join(__dirname, 'public')));

var server = app.listen('8080');
var io = require('socket.io').listen(server);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('server message', 'Say hi to the server!');
  socket.on('client message', function(msg){
    console.log('message: ' + msg);
    if(msg === 'START') {
      pad.connect().then( () => {     // Auto-detect Launchpad
        pad.reset( 3 );             // Make Launchpad glow yellow
        pad.on( 'key', k => {
            pad.col( pad.red, k );  // Turn on buttons on press
            socket.emit('pad message', k);
        } );
      } );
    } else if(msg === 'FINISH') {
      pad.reset( 0 );
      pad.disconnect();
    }
  });
});


module.exports = app;