"use strict";

let Snake = {};
let pad;

// game Status
let isPlaying = false;
let currentLevel;
let direction; // left, right, up, down
let inertia;
let snake;
let target;
let targetCandidates;
let head;
let snakeColor;
let snakeHeadColor;
let targetColor;

let initGame = function(){
  pad.reset(0);
  snakeColor = pad.green;
  snakeHeadColor = pad.red;
  targetColor = pad.amber;
  isPlaying = true;
  currentLevel = 1;
  generateInitialSnake();
  head = snake[0];
  generateRandomValidDirection();
  generateTarget();
  paint();
  gameLoop();
}

let gameLoop = function(){
  if(isPlaying) {
    if (checkIfPossible()) {
      snake.unshift(head);
      if(checkIfTarget()) {
        targetCandidates.splice(targetCandidates.indexOf(head), 1);
        generateTarget();
        currentLevel++;
      } else {
        targetCandidates.push(snake.pop());
      }
    } else {
      endGame();
    }
    paint();
    setTimeout(gameLoop, 500 + (1000 / currentLevel));
  }
}

function checkIfPossible() {
  let newHead = [head[0], head[1]];
  if(direction === 'left'){
    newHead[0]--;
  } else if(direction === 'right'){
    newHead[0]++;
  } else if(direction === 'up'){
    newHead[1]--;
  } else if(direction === 'down'){
    newHead[1]++;
  }
  inertia = direction;
  head = newHead;
  return head[0] >= 0 && head[0] <= 7 && head[1] >= 0 && head[1] <= 7;
}

function checkIfTarget() {
  return head[0] === target[0] && head[1] === target[1];
}

function paint(){
  pad.reset(0);
  snake.forEach((pair, index) => {
    pad.col(snakeColor, pair);
  });
  pad.col(snakeHeadColor, snake[0]).then( () => {
    setTimeout(() => {
      pad.col(snakeColor, snake[0]);
    }, 100);
  });
  pad.col(targetColor, target);
}

// let gameRender = function() {
//   let nextPosition = [snakeBuffer[0][0], snakeBuffer[0][1]];
//   let lastPosition = snakeBuffer.pop();
//   if(direction === 'left'){
//     nextPosition[0]--;
//   } else if(direction === 'right'){
//     nextPosition[0]++;
//   } else if(direction === 'up'){
//     nextPosition[1]--;
//   } else if(direction === 'down'){
//     nextPosition[1]++;
//   }
//   snakeBuffer.unshift(nextPosition);
//   objectiveCandidates.splice(objectiveCandidates.indexOf(nextPosition), 1);
//   objectiveCandidates.push(lastPosition);
//   pad.col(pad.red.off, lastPosition);
//   pad.col(pad.red, snakeBuffer[0]).then( () => {
//     setTimeout(() => {
//       pad.col(pad.green, snakeBuffer[0]);
//     }, 100)
//   });

//   if(snakeBuffer[0][0] > 7 || snakeBuffer[0][0] < 0 || snakeBuffer[0][1] > 7 || snakeBuffer[0][1] < 0 ){
//     endGame();
//   }
//   if(snakeBuffer[0][0] === objective[0] && snakeBuffer[0][1] === objective[1]){
//     achievedObjective();
//     snakeBuffer.push(lastPosition);
//   }
// }

// let achievedObjective = function(){
//   generateTarget();
//   currentLevel++;
// }

function generateInitialSnake() {
  snake = [];
  snake.push([getRandomIntInclusive(0, 7), getRandomIntInclusive(0, 7)]);
  snake.push(getRandomAdjacent(snake[0]));
  snake.push(getRandomAdjacent(snake[1]));
}

let generateTarget = function(){
  targetCandidates = getBoardLeft();
  target = targetCandidates[getRandomIntInclusive(0, targetCandidates.length - 1)];
}

function generateRandomValidDirection() {
  let validDirections = getValidDirections();
  direction = validDirections[getRandomIntInclusive(0, validDirections.length - 1)];
}

function endGame() {
  isPlaying = false;
}

Snake.padFunction = k => {
  if(k.pressed) {
    if((inertia === 'right' || inertia === 'left') && k.y !== snake[0][1]){
      direction = k.y < snake[0][1] ? 'up' : 'down';
    } else if((inertia === 'up' || inertia === 'down') && k.x !== snake[0][0]) {
      direction = k.x < snake[0][0] ? 'left' : 'right';
    }
  }
};

Snake.init = (param) => {
  pad = param;
  initGame();
}

Snake.end = endGame;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function getRandomAdjacent(pair, max = 8) {
  let [x, y] = pair;
  let nx, ny;
  nx = getRandomIntInclusive(0,1) ? x + 1 : x - 1;
  ny = getRandomIntInclusive(0,1) ? y + 1 : y - 1;
  nx = x <= 0 ? x + 1 : nx; //if left
  nx = x >= 7 ? x - 1 : nx; //if right
  ny = y <= 0 ? y + 1 : ny; //if top
  ny = y >= 7 ? y - 1 : ny; //if bottom
  return getRandomIntInclusive(0,1) ? [nx, y] : [x, ny];
}

function getValidDirections() {
  let validDirections = [];
  head[0] >= 0 && validDirections.push('right');
  head[0] <= 7 && validDirections.push('left');
  head[1] >= 0 && validDirections.push('down');
  head[1] <= 7 && validDirections.push('up');
  return validDirections;
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
