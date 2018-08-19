"use strict"

let pad;
let startTime;

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
      animation.push({
        time: timeDiff,
        k: k,
        color: pad.brushColor._name
      });

      animationId = (k[0] * 8) + k[1];

      animations.paintAnimationById(animationId);
    }
  },
  paintAnimationById: function(id) {
    // LOOK FOR ANIMATION AT FILE by ID
    /*
    literalAnimation = animationDictionary[id]
    paintAnimation(literalAnimation)
    */
  },
  paintAnimation: function(literalAnimation) {
    pad.cleanBoard();
    console.log(literalAnimation);
    literalAnimation.forEach(function(item) {
      setTimeout(() => {
        pad.paint(pad.colors[item.color], [Number(item.x), Number(item.y)]);
      }, item.time);
    });
  }
}

module.exports = animations;