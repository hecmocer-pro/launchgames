"use strict"

const pad = require('./pad.js');
const socketSetup = {};

/* Engancha las funciones de pad.js con los eventos en el socket */
socketSetup.initSocket = function(socketB) {
  socketB.on('Connect Launchpad', () => fn.connectLaunchpad(socketB));
  socketB.on('Disconnect Launchpad', () => fn.disconnectLaunchpad(socketB));
  socketB.on('Launch game', (msg) => fn.launchGame(msg, socketB));
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
  launchGame: function(msg, socketB) {
    switch (msg) {
      case 'Menu': 
        pad.launch.menu(socketB);
      break;
      case 'Freepaint':
        pad.launch.freepaint(socketB);
      break;
      case 'Animations':
        pad.launch.animations(socketB);
      break;
      case 'Messages':
        pad.launch.messages(socketB);
      break;
      case 'Snake':
        pad.launch.snake();
        break;
      case 'Simon-says':
        pad.launch.simon();
        break;
      case 'Fast':
        pad.launch.fast();
        break;
      case 'Minesweeper':
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