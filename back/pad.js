"use strict";

const Launchpad = require('launchpad-mini');
const freepaint = require('./freepaint.js');
const animations = require('./animations.js');
const messenger = require('./messenger.js');
const snake = require('./snake.js');
// const simon = require('./simon-says.js');
const launchpad = new Launchpad();
const maps = require('./launchpadMaps.js');
const lists = require('./launchpadLists.js');
const pad = {};

/* Settings */
let isConnected = false;
let blockedSemaphore = false;
let gamePadFunction = () => {};

/* Conecta el Launchpad */
pad.connect = (socketB) => {
  launchpad.on('key', k => {
    if(k.pressed && k[0] === 1 && k[1] === 1) {
      socketB.emit('PLAY_SOUND', 1);
    }
    if(k.pressed && k[0] === 2 && k[1] === 2) {
      socketB.emit('PLAY_SOUND', 2);
    }
    if(k.pressed && k[0] === 3 && k[1] === 3) {
      socketB.emit('PLAY_SOUND', 3);
    }
    if(k.pressed && k[0] === 4 && k[1] === 4) {
      socketB.emit('PLAY_SOUND', 4);
    }
    if(k.pressed && k[0] === 5 && k[1] === 5) {
      socketB.emit('PLAY_SOUND', 5);
    }
    gamePadFunction(k, launchpad.isPressed(k));
    if (pad.utils.isPaletteActivated && launchpad.isPressed(k) && pad.utils.isRightControl(k)) {
      pad.utils.setNewColor(k);
    }
    if (pad.utils.isSpeedActivated && launchpad.isPressed(k) && pad.utils.isTopControl(k)) {
      pad.utils.updateSpeed(k);
    }
  });
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
// launchpad.on('key', k => {
//   if(k[0] === 0 && k[1] === 0) {
//     socketB.emit('PLAY_SOUND', 1);
//   }
//   if(k[0] === 1 && k[1] === 1) {
//     socketB.emit('PLAY_SOUND', 2);
//   }
//   if(k[0] === 2 && k[1] === 2) {
//     socketB.emit('PLAY_SOUND', 3);
//   }
//   if(k[0] === 3 && k[1] === 3) {
//     socketB.emit('PLAY_SOUND', 4);
//   }
//   if(k[0] === 4 && k[1] === 4) {
//     socketB.emit('PLAY_SOUND', 5);
//   }
//   gamePadFunction(k, launchpad.isPressed(k));
//   if (pad.utils.isPaletteActivated && launchpad.isPressed(k) && pad.utils.isRightControl(k)) {
//     pad.utils.setNewColor(k);
//   }
//   if (pad.utils.isSpeedActivated && launchpad.isPressed(k) && pad.utils.isTopControl(k)) {
//     pad.utils.updateSpeed(k);
//   }
// });

pad.launch = {
  freepaint: (socketB) => {
    // pad.utils.countdown(function() {
      pad.utils.cleanAll();
      freepaint.init(pad.utils, socketB);
      gamePadFunction = freepaint.padFunction;
    // })
  },
  animations: (socketB) => {
    // pad.utils.countdown(function() {
      pad.utils.cleanAll();
      animations.init(pad.utils, socketB);
      gamePadFunction = animations.padFunction;
    // })
  },
  messenger: (socketB) => {
    // pad.utils.countdown(function() {
      pad.utils.cleanAll();
      messenger.init(pad.utils, socketB);
      gamePadFunction = messenger.padFunction;
    // })
  },
  snake: () => {
    // pad.utils.countdown(function() {
    //   pad.utils.cleanAll();
    //   snake.init(pad.utils);
    //   gamePadFunction = snake.padFunction;
    // });
  },
  simon: () => {},
  fast: () => {},
  minesweeper: () => {},
}

pad.kill = {
  freepaint: () => {
    gamePadFunction = () => {};
  },
  animations: () => {
    gamePadFunction = () => {};
  },
  messenger: () => {
    /* NOTHING TO DO */
  },
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
  brushColor: launchpad.red,
  colorOff: launchpad.off,
  selectedColorKey: [8,7],
  isPaletteActivated: false,
  palette: [
    [launchpad.red.low, [8, 0]],
    [launchpad.red.full, [8, 1]],
    [launchpad.green.low, [8, 2]],
    [launchpad.green.full, [8, 3]],
    [launchpad.amber.low, [8, 4]],
    [launchpad.amber.full, [8, 5]],
    [launchpad.off, [8, 6]]
  ],
  paintPalette: function() {
    pad.utils.isPaletteActivated = true;
    pad.utils.palette.forEach(function(item) {
      pad.utils.paint(item[0], item[1]);
    });
    pad.utils.paint(pad.utils.brushColor, pad.utils.selectedColorKey);
  },
  setNewColor: function(k) {
    const controlIndex = pad.utils.palette.findIndex(function(item) {
      return item[1][0] === k[0] && item[1][1] === k[1]
    });
    pad.utils.brushColor = pad.utils.palette[controlIndex][0];
    pad.utils.paint(pad.utils.brushColor, pad.utils.selectedColorKey);
  },
  speed: 50,
  maxSpeed: 200,
  minSpeed: 0,
  initSpeed: function(){
    pad.utils.isSpeedActivated = true;
  },
  updateSpeed: function(key) {
    if (pad.utils.isTopControl(key, 0)) {
      pad.utils.updateSpeedValue(pad.utils.speed - 20);
    } else if (pad.utils.isTopControl(key, 1)) {
      pad.utils.updateSpeedValue(pad.utils.speed + 20);
    } else if (pad.utils.isTopControl(key, 2)) {
      pad.utils.updateSpeedValue(pad.utils.speed - 5);
    } else if (pad.utils.isTopControl(key, 3)) {
      pad.utils.updateSpeedValue(pad.utils.speed + 5);
    }
  },
  updateSpeedValue: function(newVal) {
    if (newVal > pad.utils.minSpeed && newVal < pad.utils.maxSpeed) {
      pad.utils.speed = newVal;
    } else {
      pad.utils.speed = newVal <= pad.utils.minSpeed ? pad.utils.minSpeed : pad.utils.maxSpeed;
    }
  },
  countdown: function(callback) {
    pad.utils.cleanAll();
    pad.utils.number(pad.utils.colors.green, 3);
    setTimeout(() => { pad.utils.cleanAll(); pad.utils.number(pad.utils.colors.amber, 2); }, 1000);
    setTimeout(() => { pad.utils.cleanAll(); pad.utils.number(pad.utils.colors.red, 1); }, 2000);
    setTimeout(() => { pad.utils.cleanAll(); callback(); }, 3000);
  },
  number(color, n) {
    if ( n === 1) {
      launchpad.col(color, lists[49]);
    } else if ( n === 2) {
      launchpad.col(color, lists[50]);
    } else if ( n === 3) {
      launchpad.col(color, lists[51]);
    }
  },
  cleanAll: function() {
    pad.utils.isPaletteActivated = false;
    pad.utils.isSpeedActivated = false;
    launchpad.reset(0);
  },
  cleanBoard: function() {
    launchpad.col(pad.utils.colors.off, launchpad.fromMap(maps.board))
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
  isRightControl: function(key, index) {
    let isRightControl = key[0] === 8;
    if (index >= 0) {
      isRightControl = isRightControl && key[1] === index;
    }
    return isRightControl;
  },
  isTopControl: function(key, index) {
    let isTopControl = key[1] === 8;
    if (index >= 0) {
      isTopControl = isTopControl && key[0] === index;
    }
    return isTopControl;
  }
}

pad.paintedBoard = [];
pad.board = pad.utils.getBoardFull();

module.exports = pad;
