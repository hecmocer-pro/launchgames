"use strict";

let Snake = {};
let pad

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
  pad.clean();
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
  let isPossible = false;
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
  if (head[0] >= 0 && head[0] <= 7 && head[1] >= 0 && head[1] <= 7) {
    isPossible = true;
    for(let i=0; i < snake.length && isPossible; i++){
      isPossible = snake[i][0] !== head[0] || snake[i][1] !== head[1];
    }
  }
  return isPossible;
}

function checkIfTarget() {
  return head[0] === target[0] && head[1] === target[1];
}

function paint(){
  pad.clean();
  snake.forEach((pair, index) => {
    pad.paint(snakeColor, pair);
  });
  pad.paint(snakeHeadColor, snake[0]).then( () => {
    setTimeout(() => {
      pad.paint(snakeColor, snake[0]);
    }, 100);
  });
  pad.paint(targetColor, target);
}

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

//NOT THE DIRECTION WHERE THE SNAKE CURRENTLY IS
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

Snake.init = (pad) => {
  pad = pad;
  snakeColor = pad.colors.green;
  snakeHeadColor = pad.colors.red;
  targetColor = pad.colors.amber;
  initGame();
}

Snake.end = endGame;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

//NOT THE SAME ADJACENT AS BEFORE
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
