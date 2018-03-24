"use strict"

const pad = require('./pad.js');
const socketSetup = {};

/* Engancha las funciones de pad.js con los eventos en el socket */
socketSetup.initSocket = function(socketB) {
  socketB.on('Connect Launchpad', () => fn.connectLaunchpad(socketB));
  socketB.on('Disconnect Launchpad', () => fn.disconnectLaunchpad(socketB));
  socketB.on('Launch game', (msg) => fn.launchGame(msg));
  socketB.on('Kill game', (msg) => fn.killGame(msg));

  console.log('Socket escuchando y configurado en back');
  socketB.emit('Socket ready');
}

const fn = {
  connectLaunchpad: function(socketB) {
    pad.connect(socketB);
  },
  disconnectLaunchpad: function(socketB) {
    pad.disconnect(socketB);
  },
  launchGame: function(msg) {
    switch (msg) {
      case 'snake':
        pad.launchSnake();
        break;
      case 'simon-says':
        pad.launchSimonSays();
        break;
      case 'fast':
        pad.launchFast();
        break;
      case 'minesweeper':
        pad.launchMinesweeper();
        break;
      default:
        break;
    }
  },
  killGame: function(msg) { 
    switch (msg) {
      case 'snake':
        pad.killSnake();
        break;
      case 'simon-says':
        pad.killSimonSays();
        break;
      case 'fast':
        pad.killFast();
        break;
      case 'minesweeper':
        pad.killMinesweeper();
        break;
      default:
        break;
    }
  }
}

module.exports = socketSetup;