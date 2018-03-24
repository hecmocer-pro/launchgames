"use strict";

let Simon = {};
let pad;

// game Status
let simon = [];
let simonLeft = [];

let initGame = function(){
  pad.reset(0);
  simon = [];
  simonLeft = [];
  gameLoop();
}

let gameLoop = function(){
  setTimeout(gameLoop, 500);
}

function paint(){
  pad.reset(0);
//   snake.forEach((pair, index) => {
//     pad.col(snakeColor, pair);
//   });
//   pad.col(snakeHeadColor, snake[0]).then( () => {
//     setTimeout(() => {
//       pad.col(snakeColor, snake[0]);
//     }, 100);
//   });
//   pad.col(targetColor, target);
}

Simon.padFunction = k => {
  if(k.pressed) {
    if((inertia === 'right' || inertia === 'left') && k.y !== snake[0][1]){
      direction = k.y < snake[0][1] ? 'up' : 'down';
    } else if((inertia === 'up' || inertia === 'down') && k.x !== snake[0][0]) {
      direction = k.x < snake[0][0] ? 'left' : 'right';
    }
  }
};

Simon.init = (param) => {
  pad = param;
  initGame();
}

function getBoard() {
  let board = [];
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      board.push([i,j]);
    }
  }
  return board;
}

function getBoardLeft() {
  let board = getBoard();
  let foundIndex = -1;
  for(let i=0; i < snake.length; i++) {
    board.splice(foundIndex, 1);
    for(let j=0; j < board.length; j++) {
      if(snake[i][0] === board[j][0] && snake[i][1] === board[j][1]){
        foundIndex = j;
        break;
      }
    }
  }
  return board;
}

module.exports = Snake;
