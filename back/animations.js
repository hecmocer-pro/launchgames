"use strict"

let pad;
let startTime;
let liveAnimationRecord = [];
let liveAnimationTimesout = [];
let preservePainting = false;
let preserveSteps = false;
let selectedAnimationDictionary = 0;
let animationDictionaries = [
  require('./animationDictionary1.js'),
  require('./animationDictionary2.js')
];

const animations = {
  setup: function(utils, preservePaintingVal, preserveStepsVal) {
    preservePainting = preservePaintingVal;
    preserveSteps = preserveStepsVal;
    pad = utils;
  },
  init: function(utils, socketB) {
    animations.setup(utils)
    startTime = new Date();
    socketB.on('Animations update', (animation) => animations.paintAnimation(animation.sequence));
    animations.setAnimationDictionary(selectedAnimationDictionary);
    pad.paint(pad.colors.red, [5, 8]);
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
    if (isPressed && pad.isTopControl(k,5)) {
      animations.setAnimationDictionary(0);
      pad.paint(pad.colors.red, [5, 8]);
      pad.paint(pad.colors.off, [6, 8]);
    }
    if (isPressed && pad.isTopControl(k,6)) {
      animations.setAnimationDictionary(1);
      pad.paint(pad.colors.red, [6, 8]);
      pad.paint(pad.colors.off, [5, 8]);
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
  setAnimationDictionary: function(index) {
    selectedAnimationDictionary = index;
  },
  paintAnimationById: function(id) {
    const chosenAnimation = animationDictionaries[selectedAnimationDictionary][id];
    if (chosenAnimation) {
      animations.paintAnimation(chosenAnimation, pad.brushColor);
    }
  },
  paintAnimation: function(literalAnimation, color) {
    color = color ? color : pad.brushColor ? pad.brushColor : pad.colors.red; /* Default color just in case */
    if (!preservePainting) {
      animations.cleanAnimation();
    }
    literalAnimation.forEach(function(item) {
      liveAnimationTimesout.push(setTimeout(() => {
        pad.paint(pad.colors[item.color] || color, [Number(item.x), Number(item.y)]);
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