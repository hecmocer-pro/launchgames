"use strict"

let pad;
let startTime;

const animations = {
  init: function(utils, socketB) {
    socketB.on('Animation update', (id) => animations.paintAnimation(id));
    startTime = new Date();
    pad = utils;
    pad.paintPalette();
  },
  padFunction: function(k, isPressed) {
    if (isPressed && !pad.isTopControl(k) && !pad.isRightControl(k)) {

      /* https://stackoverflow.com/a/41633001 */
      const pressedTime = new Date();
      let timeDiff = pressedTime - startTime; //in ms
      animation.push({
        time: timeDiff,
        k: k,
        color: brushColor._name
      });

      animations.paintAnimation(k);
    }
  },
  paintAnimation: function(id) {
    pad.cleanBoard();
    // LOOK FOR ANIMATION AT FILE by ID
    /* chosenAnimation = animationDictionary[id] */
    chosenAnimation.forEach(function(item) {
      setTimeout(() => {
        pad.paint(pad.colors[item.color], [Number(item.x), Number(item.y)]);
      }, item.time);
    });
  }
}

module.exports = animations;