"use strict";

const Launchpad = require('launchpad-mini');
const snake = require('./snake.js');

let pad = new Launchpad();
let launchpad = {};
let isConnected = false;
let blockedSemaphore = false;

let gamePadFunction = () => {};

launchpad.connect = (socket) => {
  if(!blockedSemaphore && !isConnected){
    blockedSemaphore = true;
    pad.connect().then(() => {
      socket.emit('launchpad status', 'launchpad connect success');
      blockedSemaphore = false;
      isConnected = true;
    }, () => {
      socket.emit('launchpad status', 'launchpad connect error');
      blockedSemaphore = false;
      isConnected = false;
    });
  }
}

launchpad.disconnect = (socket) => {
  if(!blockedSemaphore && isConnected){
    blockedSemaphore = true;
    pad.reset(0);
    pad.disconnect();
    socket.emit('launchpad status', 'launchpad disconnect success');
    blockedSemaphore = false;
    isConnected = false;
  }
}

launchpad.reset = (val) => {
  pad.reset(val);
}

pad.on('key', k => {
  gamePadFunction(k);
});

launchpad.launchSnake = () => {
  snake.init(pad);
  gamePadFunction = snake.padFunction;
}

launchpad.killSnake = () => {
  snake.end();
  gamePadFunction = () => {};
}

module.exports = launchpad;
