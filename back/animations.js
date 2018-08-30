"use strict"

let pad;
let startTime;
let liveAnimationRecord = [];
let liveAnimationTimesout = [];
let preservePainting = false;
let preserveSteps = false;
let animationDictionary = require('./animationDictionary.js');

const animations = {
  init: function(utils, socketB) {
    socketB.on('Animations update', (animation) => animations.paintAnimation(animation.sequence));
    startTime = new Date();
    pad = utils;
    pad.paintPalette();
    pad.initSpeed();
  },
  padFunction: function(k, isPressed) {
    if (isPressed && !pad.isTopControl(k) && !pad.isRightControl(k)) {

      /* https://stackoverflow.com/a/41633001 */
      const pressedTime = new Date();
      let timeDiff = pressedTime - startTime; //in ms
      // liveAnimationRecord.push({
      //   time: timeDiff,
      //   k: k,
      //   color: pad.brushColor._name
      // });

      let animationId = k[0] + (k[1] * 8);

      animations.paintAnimationById(animationId);
    }
    if (isPressed && pad.isTopControl(k,7)) {
      preservePainting = !preservePainting;
      preservePainting ? pad.paint(pad.colors.red, [7, 8]) : pad.paint(pad.colors.off, [7, 8]);
    }
    if (isPressed && pad.isTopControl(k,4)) {
      preserveSteps = !preserveSteps;
      preserveSteps ? pad.paint(pad.colors.red, [4, 8]) : pad.paint(pad.colors.off, [4, 8]);
    }
  },
  paintAnimationById: function(id) {
    const chosenAnimation = animationDictionary[id];
    if (chosenAnimation) {
      animations.paintAnimation(animationDictionary[id], pad.brushColor);
    }
  },
  paintAnimation: function(literalAnimation, color) {
    if (!preservePainting) {
      animations.cleanAnimation();
    }
    literalAnimation.forEach(function(item) {
      liveAnimationTimesout.push(setTimeout(() => {
        pad.paint(color, [Number(item.x), Number(item.y)]);
      }, pad.speed * item.delay));
      liveAnimationTimesout.push(setTimeout(() => {
        if (preserveSteps) {
          pad.paint(pad.colors.off, [Number(item.x), Number(item.y)]);
        }
      }, (pad.speed * item.delay) + pad.speed - 1));
    })
  },
  cleanAnimation: function() {
    pad.cleanBoard();
    liveAnimationTimesout.forEach(function(timeout) {
      clearTimeout(timeout);
    });
    liveAnimationTimesout = [];
  }
}

module.exports = animations;