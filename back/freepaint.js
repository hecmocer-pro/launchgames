"use strict"

let painting = [];
let palette = [];
let color;
let colorOff;
let pad;
let selectedColorKey = [8,7];

const freepaint = {
  init: function(utils) {
    pad = utils;
    color = pad.colors.red;
    colorOff = pad.colors.off;
    palette = [
      [pad.colors.red.low, [8, 0]],
      [pad.colors.red.full, [8, 1]],
      [pad.colors.green.low, [8, 2]],
      [pad.colors.green.full, [8, 3]],
      [pad.colors.amber.low, [8, 4]],
      [pad.colors.amber.full, [8, 5]]
      // [pad.colors.yellow.low, [8, 6]],
      // [pad.colors.yellow.full, [8, 7]]
    ];
    freepaint.paintPalette();
  },
  paintPalette: function() {
    palette.forEach(function(item) {
      pad.paint(item[0], item[1]);
    });
  },
  padFunction: function(k, isPressed) {
    if (isPressed) {
      if (pad.isRightControl(k)) {
        freepaint.setNewColor(k);
      } else {
        // si es el mismo color
        /* BUSCAR UNA ESTRUCTURA DE DATOS QUE PERMITA ALOJA PARES key, color
         * PARA PODER HACER BÚSQUEDA POR AMBOS Y OBTENER EL RESPECTIVO */
        freepaint.togglePaint(k);
      }
    }
  },
  setNewColor: function(k) {
    const controlIndex = palette.findIndex(function(item) {
      return item[1][0] === k[0] && item[1][1] === k[1]
    });
    color = palette[controlIndex][0];
    pad.paint(color, selectedColorKey);
  },
  togglePaint: function(k) {
    const foundIndex = painting.findIndex((key) => key[0] === k[0] && key[1] === k[1]);
    if (foundIndex < 0) {
      freepaint.addPaint(k);
    } else {
      freepaint.removePaint(k, foundIndex);
    }
  },
  addPaint: function(k) {
    painting.push(k);
    pad.paint(color, k);
  },
  removePaint: function(k, index) {
    painting.splice(index, 1);
    pad.paint(colorOff, k);
  }
}

module.exports = freepaint;