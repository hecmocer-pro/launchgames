"use strict"

let pad;
let startTime;
let liveAnimationRecord = [];
let liveAnimationTimesout = [];
let preservePainting = false;
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
    if (pad.isTopControl(k,7)) {
      preservePainting = isPressed;
    }
  },
  paintAnimationById: function(id) {
    const chosenAnimation = animationDictionary[id];
    if (chosenAnimation) {
      animations.paintAnimation(animationDictionary[id]);
    }
  },
  paintAnimation: function(literalAnimation) {
    if (!preservePainting) {
      animations.cleanAnimation();
    }
    literalAnimation.forEach(function(item, index) {
      liveAnimationTimesout.push(setTimeout(() => {
        pad.paint(pad.brushColor, [Number(item.x), Number(item.y)]);
      }, pad.speed * item.delay));
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