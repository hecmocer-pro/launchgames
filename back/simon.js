"use strict";

let Simon = {};
let pad;

// game Status
let simon = [];
let simonLeft = [];
let iaTurn = false;
let iaPaint = false;

const initGame = function(){
  pad.reset(0);
  simon = [];
  simonLeft = [];
  gameLoop();
}

const gameLoop = function(){
  if (iaTurn) {
    // simon.push(NEW RANDOMPAIR)
    // iaPaintLoop({ data: simon, paint: true })
  }
  /* ELSE turno del jugador, esperar a que haga movimiento y capturarlo en padFunction */
  setTimeout(gameLoop, 500);
}

const iaPaintLoop = function({ pairs, paint }) {
  if (pairs.length > 0) {
    pad.clean();
    if (paint) {
      // pop
      // paint
      setTimeout(function () {
        iaPaintLoop(pairs, false);
      }, 500); // decreasing per level
    } else {
      setTimeout(function () {
        iaPaintLoop(pairs, true);
      }, 500); // decreasing per level
    }
  } else {
    // turno de jugador
  }
}

const checkHit = function() {

}

Simon.padFunction = k => {
  if (!iaTurn) {
    hit = checkHit();
    if (hit) {
      // pop
    } else {
      // end game
    }
  }
};

Simon.init = (pad) => {
  pad = pad;
  initGame();
}

module.exports = Snake;
