"use strict"

let pad;
let startTime;
let liveAnimation = [];
let animationDictionary = require('./animationDictionary.js');

const animations = {
  init: function(utils, socketB) {
    socketB.on('Animations update', (animation) => animations.paintAnimation(animation.sequence));
    startTime = new Date();
    pad = utils;
    pad.paintPalette();
  },
  padFunction: function(k, isPressed) {
    if (isPressed && !pad.isTopControl(k) && !pad.isRightControl(k)) {

      /* https://stackoverflow.com/a/41633001 */
      const pressedTime = new Date();
      let timeDiff = pressedTime - startTime; //in ms
      liveAnimation.push({
        time: timeDiff,
        k: k,
        color: pad.brushColor._name
      });

      let animationId = (k[0] * 8) + k[1];

      animations.paintAnimationById(animationId);
    }
  },
  paintAnimationById: function(id) {
    const chosenAnimation = animationDictionary[id];
    if (chosenAnimation) {
      animations.paintAnimation(animationDictionary[id]);
    }
  },
  paintAnimation: function(literalAnimation) {
    pad.cleanBoard();
    literalAnimation.forEach(function(item) {
      setTimeout(() => {
        pad.paint(pad.brushColor, [Number(item.x), Number(item.y)]);
      }, item.time);
    });
  }
}

module.exports = animations;