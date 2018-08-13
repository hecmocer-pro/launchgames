"use strict"

let painting = [];
let palette = [];
let brushColor;
let colorOff;
let pad;
let selectedColorKey = [8,7];
let resetCheatCount = 0;

const freepaint = {
  init: function(utils) {
    pad = utils;
    brushColor = pad.colors.red;
    colorOff = pad.colors.off;
    palette = [
      [pad.colors.red.low, [8, 0]],
      [pad.colors.red.full, [8, 1]],
      [pad.colors.green.low, [8, 2]],
      [pad.colors.green.full, [8, 3]],
      [pad.colors.amber.low, [8, 4]],
      [pad.colors.amber.full, [8, 5]],
      [pad.colors.off, [8, 6]]
      // [pad.colors.yellow.low, [8, 6]],
      // [pad.colors.yellow.full, [8, 7]]
    ];
    freepaint.paintPalette();
  },
  paintPalette: function() {
    palette.forEach(function(item) {
      pad.paint(item[0], item[1]);
    });
    pad.paint(brushColor, selectedColorKey);
  },
  padFunction: function(k, isPressed) {
    if (isPressed) {
      if (pad.isRightControl(k)) {
        if (pad.isRightControl(k,6)) {
          freepaint.setNewColor(k); 
          freepaint.log(); // logs the painting coordinates
          freepaint.resetCheat(); // three times in a row cleans the board
        } else if (!pad.isRightControl(k,7)) {
          freepaint.setNewColor(k);
        }
      } else if (!pad.isTopControl(k)) {
        freepaint.togglePaint(k);
      }
    }
  },
  setNewColor: function(k) {
    const controlIndex = palette.findIndex(function(item) {
      return item[1][0] === k[0] && item[1][1] === k[1]
    });
    brushColor = palette[controlIndex][0];
    pad.paint(brushColor, selectedColorKey);
  },
  togglePaint: function(k) {
    const foundIndex = painting.findIndex((key) => key[0][0] === k[0] && key[0][1] === k[1]);
    if (foundIndex < 0) {
      freepaint.addPaint(k);
    } else if (painting[foundIndex][1] !== brushColor) {
      freepaint.replace(k, foundIndex);
    } else {
      freepaint.removePaint(k, foundIndex);
    }
  },
  log: function() {
    console.log(painting.map(pair => [pair[0][0], pair[0][1]]));
  },
  resetCheat: function() {
    resetCheatCount++;
    if (resetCheatCount > 3) {
      resetCheatCount = 0;
      painting = [];
      pad.cleanBoard();
    }
  },
  addPaint: function(k) {
    painting.push([k, brushColor]);
    pad.paint(brushColor, k);
  },
  removePaint: function(k, index) {
    painting.splice(index, 1);
    pad.paint(colorOff, k);
  },
  replace: function(k, index) {
    freepaint.removePaint(k, index);
    freepaint.addPaint(k);
  }
}

module.exports = freepaint;