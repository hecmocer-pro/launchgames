"use strict";

let Snake = {};
let pad;

// game Status
let isPlaying = false;
let currentLevel;
let snakeBuffer;
let direction; // left, right, up, down
let objective = [0,0];
let objectiveCandidates = [];

let initGame = function(){
  isPlaying = true;
  snakeBuffer = [[2,0],[1,0],[0,0]];
  currentLevel = 1;
  direction = 'right';
  (function(){
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        objectiveCandidates.push([i,j]);
      }
    }
  })();
  snakeBuffer.forEach((pair) => {
    objectiveCandidates.splice(objectiveCandidates.indexOf(pair), 1);
  })
  recalcObjective();
  gameLoop();
}

let endGame = function(){
  isPlaying = false;
}

let gameLoop = function(){
  if(isPlaying) {
    snakeBuffer.forEach((pair) => {
      pad.col(pad.green, pair);
    });
    gameRender();
    setTimeout(gameLoop, 500 + (1000 / currentLevel));
  }
}

let gameRender = function() {
  let nextPosition = [snakeBuffer[0][0], snakeBuffer[0][1]];
  let lastPosition = snakeBuffer.pop();
  if(direction === 'left'){
    nextPosition[0]--;
  } else if(direction === 'right'){
    nextPosition[0]++;
  } else if(direction === 'up'){
    nextPosition[1]--;
  } else if(direction === 'down'){
    nextPosition[1]++;
  }
  snakeBuffer.unshift(nextPosition);
  objectiveCandidates.splice(objectiveCandidates.indexOf(nextPosition), 1);
  objectiveCandidates.push(lastPosition);
  pad.col(pad.red.off, lastPosition);
  pad.col(pad.red, snakeBuffer[0]).then( () => {
    setTimeout(() => {
      pad.col(pad.green, snakeBuffer[0]);
    }, 100)
  });

  if(snakeBuffer[0][0] > 7 || snakeBuffer[0][0] < 0 || snakeBuffer[0][1] > 7 || snakeBuffer[0][1] < 0 ){
    endGame();
  }
  if(snakeBuffer[0][0] === objective[0] && snakeBuffer[0][1] === objective[1]){
    achievedObjective();
    snakeBuffer.push(lastPosition);
  }
}

let achievedObjective = function(){
  recalcObjective();
  currentLevel++;
}

let recalcObjective = function(){
  pad.col(pad.red.off, objective);
  objective = objectiveCandidates[getRandomIntInclusive(0, objectiveCandidates.length-1)];
  pad.col(pad.amber, objective);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

Snake.padFunction = k => {
  if(k.pressed) {
    if(direction === 'right' || direction === 'left' && k.y !== snakeBuffer[0][1]){
      direction = k.y < snakeBuffer[0][1] ? 'up' : 'down';
    } else if(direction === 'up' || direction === 'down' && k.x !== snakeBuffer[0][0]) {
      direction = k.x < snakeBuffer[0][0] ? 'left' : 'right';
    }
  }
};

Snake.init = (param) => {
  pad = param;
  initGame();
}

Snake.end = endGame;

module.exports = Snake;
