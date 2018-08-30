"use strict";

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const socketSetup = require('./back/socketSetup.js');
const fnConfig = {
  server: function() {
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname+'/front/menu.html'));
    });
    app.get('/animations', (req, res) => {
      res.sendFile(path.join(__dirname+'/front/Animations/animations.html'));
    });
    app.get('/instruments', (req, res) => {
      res.sendFile(path.join(__dirname+'/front/Instruments/instruments.html'));
    });
    app.get('/messages', (req, res) => {
      res.sendFile(path.join(__dirname+'/front/Messages/messages.html'));
    });
    app.get('/freepaint', (req, res) => {
      res.sendFile(path.join(__dirname+'/front/Freepaint/freepaint.html'));
    });
    app.use(express.static(__dirname + '/front'));
    return app.listen(port, () => {});
  },
  socket: function(server) {
    const io = require('socket.io').listen(server);
    io.on('connection', socketSetup.initSocket);
  }
}

fnConfig.socket(fnConfig.server());