"use strict";

const Launchpad = require('launchpad-mini');
let pad = new Launchpad();
let launchpad = {};

// global Status
let isPlaying = false;
let isConnected = false;

// game Status
let currentLevel;
let currentHead;
let direction; // left, right, up, down

launchpad.connect = function(){
  if(!isConnected){
    isConnected = true;
    pad.connect().then(() => {     // Auto-detect Launchpad
      initGame();
    });
  }
}

launchpad.disconnect = function(){
  if(isConnected){
    endGame();
    isConnected = false;
    pad.reset(0);
    pad.disconnect();
  }
}

let initGame = function(){
  isPlaying = true;
  currentHead = [0,0];
  currentLevel = 1;
  direction = 'right';
  gameLoop();
}

let endGame = function(){
  isPlaying = false;
}

let gameLoop = function(){
  if(isPlaying) {
    gameRender();
    setTimeout(gameLoop, 1000 / currentLevel);
  }
}

let gameRender = function() {
  if(direction === 'left'){
    currentHead[0]--;
  } else if(direction === 'right'){
    currentHead[0]++;
  } else if(direction === 'up'){
    currentHead[1]--;
  } else if(direction === 'down'){
    currentHead[1]++;
  }
  pad.col(pad.red, currentHead).then( () => {
    setTimeout(() => {
      pad.col(pad.green, currentHead);
    }, 100)
  });

  if(currentHead[0] > 7 || currentHead[0] < 0 || currentHead[1] > 7 || currentHead[1] < 0 ){
    endGame();
  }
}

pad.on('key', k => {
  if(k.pressed) {
    if(direction === 'right' || direction === 'left'){
      console.log('');
      console.log('current - direction: ', direction);
      direction = k.y < currentHead[1] ? 'up' : 'down';
      console.log('after - direction: ', direction);
    } else if(direction === 'up' || direction === 'down') {
      console.log('');
      console.log('current - direction: ', direction);
      direction = k.x < currentHead[0] ? 'left' : 'right';
      console.log('after - direction: ', direction);
    }
  }
});

module.exports = launchpad;
