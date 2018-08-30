"use strict";

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const socketSetup = require('./back/socketSetup.js');
const fnConfig = {
  server: function() {
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname+'/front/index.html'));
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