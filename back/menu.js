"use strict"

const animations = require('./animations.js');
let animationDictionaryAux = require('./animationDictionaryAux.js');
let pad;

const menu = {
  init: function(utils, socketB) {
    pad = utils;
    pad.speed = 200;
    const preservePainting = true;
    const preserveSteps = true;
    animations.setup(utils, preservePainting, preserveSteps);
    this.paintIdleAnimations();
  },
  padFunction: function(k, isPressed) {
  },
  paintIdleAnimations() {
    // animations.paintAnimation(animationDictionaryAux[0], pad.colors.red);
    // animations.paintAnimation(animationDictionaryAux[1], pad.colors.redLow);
    // setTimeout(menu.paintIdleAnimations, pad.speed * animationDictionaryAux[0].length);
  }
}

module.exports = menu;