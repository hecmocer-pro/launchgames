"use strict";

const Launchpad = require('launchpad-mini');
const snake = require('./snake.js');
// const simon = require('./simon-says.js');
const launchpad = new Launchpad();
const pad = {};

/* Settings */
let isConnected = false;
let blockedSemaphore = false;
let gamePadFunction = () => {};

/* Conecta el Launchpad */
pad.connect = (socketB) => {
  if(!blockedSemaphore && !isConnected){
    blockedSemaphore = true;
    launchpad.connect().then(() => {
      socketB.emit('LAUNCHPAD_STATUS', {
        statusTo: 'Connect',
        code: 'Success',
        msg: 'Launchpad Connected successfully'
      });
      blockedSemaphore = false;
      isConnected = true;
    }, () => {
      socketB.emit('LAUNCHPAD_STATUS', {
        statusTo: 'Connect',
        code: 'Error',
        msg: 'Launchpad failed to connect'
      });
      blockedSemaphore = false;
      isConnected = false;
    });
  }
}

/* Desconecta el Launchpad */
pad.disconnect = (socketB) => {
  if(!blockedSemaphore && isConnected){
    blockedSemaphore = true;
    launchpad.reset(0);
    launchpad.disconnect();
    socketB.emit('LAUNCHPAD_STATUS', {
      statusTo: 'Disconnect',
      code: 'Success',
      msg: 'Launchpad Disconnected successfully'
    });
    blockedSemaphore = false;
    isConnected = false;
  }
}

/* Apaga la iluminación (creo) */
pad.reset = (val) => {
  launchpad.reset(val);
}

/* Asigna el pulsar una tecla en el launchpad con la función del juego */
launchpad.on('key', k => {
  gamePadFunction(k);
});

pad.launch = {
  snake: () => {
    snake.init(launchpad);
    gamePadFunction = snake.padFunction;
  },
  simon: () => {},
  fast: () => {},
  minesweeper: () => {},
}

pad.kill = {
  snake: () => {
    snake.end();
    gamePadFunction = () => {};
  },
  simon: () => {},
  fast: () => {},
  minesweeper: () => {},
}

module.exports = pad;
