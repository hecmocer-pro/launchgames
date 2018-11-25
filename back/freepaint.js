"use strict"

let painting = [];
let pad;
let resetCheatCount = 0;
let startTime;
const animation = [];

const freepaint = {
  init: function(utils, socketB) {
    startTime = new Date();
    pad = utils;
    pad.paintPalette();
  },
  // paintAnimation: function(chosenAnimation) {
  //   pad.cleanBoard();
  //   chosenAnimation.forEach(function(item) {
  //     setTimeout(() => {
  //       pad.paint(pad.colors[item.color], [Number(item.x), Number(item.y)]);
  //     }, item.time);
  //   });
  // },
  padFunction: function(k, isPressed) {
    if (isPressed) {
      if (pad.isRightControl(k,6)) {
        freepaint.resetCheat(); // three times in a row cleans the board
      }
  
      if (!pad.isTopControl(k) && !pad.isRightControl(k)) {
        /* https://stackoverflow.com/a/41633001 */
        const pressedTime = new Date();
        let timeDiff = pressedTime - startTime; //in ms
        animation.push({
          time: timeDiff,
          k: k,
          color: pad.brushColor._name
        });
  
        freepaint.togglePaint(k);
      }
    }
  },
  togglePaint: function(k) {
    const foundIndex = painting.findIndex((key) => key[0][0] === k[0] && key[0][1] === k[1]);
    if (foundIndex < 0) {
      freepaint.addPaint(k);
    } else if (painting[foundIndex][1] !== pad.brushColor) {
      freepaint.replace(k, foundIndex);
    } else {
      freepaint.removePaint(k, foundIndex);
    }
  },
  // log: function() {
  //   console.log(painting.map(pair => [pair[0][0], pair[0][1]]));
  // },
  resetCheat: function() {
    resetCheatCount++;
    if (resetCheatCount >= 3) {
      resetCheatCount = 0;
      painting = [];
      pad.cleanBoard();
    }
  },
  addPaint: function(k) {
    painting.push([k, pad.brushColor]);
    pad.paint(pad.brushColor, k);
  },
  removePaint: function(k, index) {
    painting.splice(index, 1);
    pad.paint(pad.colorOff, k);
  },
  replace: function(k, index) {
    freepaint.removePaint(k, index);
    freepaint.addPaint(k);
  }
}

module.exports = freepaint;