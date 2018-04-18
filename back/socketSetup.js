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
      case 'freepaint':
        pad.launch.freepaint();
      break;
      case 'messenger':
        pad.launch.messenger();
      break;
      case 'snake':
        pad.launch.snake();
        break;
      case 'simon-says':
        pad.launch.simon();
        break;
      case 'fast':
        pad.launch.fast();
        break;
      case 'minesweeper':
        pad.launch.minesweeper();
        break;
      default:
        break;
    }
  },
  killGame: function(msg) { 
    switch (msg) {
      case 'freepaint':
        pad.kill.freepaint();
        break;
      case 'messenger':
        pad.kill.messenger();
        break;
      case 'snake':
        pad.kill.snake();
        break;
      case 'simon-says':
        pad.kill.simon();
        break;
      case 'fast':
        pad.kill.fast();
        break;
      case 'minesweeper':
        pad.kill.minesweeper();
        break;
      default:
        break;
    }
  }
}

module.exports = socketSetup;