"use strict";

const Launchpad = require('launchpad-mini');
const freepaint = require('./freepaint.js');
const snake = require('./snake.js');
// const simon = require('./simon-says.js');
const launchpad = new Launchpad();
const maps = require('./launchpadMaps.js');;
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
  gamePadFunction(k, launchpad.isPressed(k));
});

pad.launch = {
  freepaint: () => {
    pad.utils.clean();
    freepaint.init(pad.utils);
    gamePadFunction = freepaint.padFunction;
  },
  snake: () => {
    // pad.utils.countdown(function() {
    //   pad.utils.clean();
    //   snake.init(pad.utils);
    //   gamePadFunction = snake.padFunction;
    // });
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

pad.utils = {
  fromMap: (param) => { launchpad.fromMap(param) },
  colors: {
    red: launchpad.red,
    green: launchpad.green,
    amber: launchpad.amber,
    off: launchpad.off,
    // +low +medium +full
  },
  countdown: function(callback) {
    pad.utils.number(pad.utils.green, 3);
    setTimeout(() => { pad.utils.number(pad.utils.ambar, 2); }, 1000);
    setTimeout(() => { pad.utils.number(pad.utils.red, 1); }, 2000);
    setTimeout(() => { callback(); }, 3000);
  },
  number(color, n) {
    if ( n === 1) {
      launchpad.col(pad.utils.colors.green, launchpad.fromMap(maps.one));
    } else if ( n === 2) {
      launchpad.col(pad.utils.colors.green, launchpad.fromMap(maps.two))
    } else if ( n === 3) {
      launchpad.col(pad.utils.colors.green, launchpad.fromMap(maps.three))
    }
  },
  clean: function() {
    launchpad.reset(0);
  },
  getSideControls: function() {

  },
  getBoardFull: function() {
    let board = [];
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        board.push([i,j]);
      }
    }
    return board;
  },
  getBoardLeft: function() {
    let fullBoard = pad.utils.getBoardFull();
    return fullBoard.filter((pair) => {
      return pad.paintedBoard.find((pairPainted) => {
        return pairPainted[0] === pair[0] && pairPainted[1] === pair[1];
      })
    });
  },
  paint: function(color, pair) {
    return launchpad.col(color, pair);
  },
  paintFromMap: function(color, map) {
    return launchpad.col(color, launchpad.fromMap(map));
  },
  isRightControl: function(key) {
    return key[0] === 8;
  },
  isLeftControl: function(key) {
    return key[1] === 8;
  }
}

pad.paintedBoard = [];
pad.board = pad.utils.getBoardFull();

module.exports = pad;