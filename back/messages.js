"use strict"

const lists = require('./launchpadLists.js');
let pad;
let height = 1;
let sentenceLoop;

const messenger = {
  init: function(utils, socketB) {
    pad = utils;
    socketB.on('Messenger update', (sentence) => messenger.speakThis(sentence));
  },
  padFunction: function(k, isPressed) {
    // if (isPressed) {
    //   if(pad.isTopControl(k,2)) {
    //     speed += 10;
    //   } else if(pad.isTopControl(k,3)) {
    //     speed -= 10;
    //   }
    //   console.log(speed);
    // }
  },
  speakThis: function({speed, text, loop}) {
    messenger.stopCurrentSentence();
    if (!loop) {
      messenger.saySentence(text, speed);
    } else {
      messenger.saySentenceLoop(text, speed);
    }
  },
  stopCurrentSentence: function() {
    sentenceLoop && clearTimeout(sentenceLoop);
  },
  saySentence: function(sentence, speed, callback) {
    const sentenceMap = messenger.mapSentence(sentence);
    messenger.paintSentence(sentenceMap, speed, 0, 8 + sentence.length * 4, callback);
  },
  saySentenceLoop:  function(sentence, speed) {
    messenger.saySentence(sentence, speed, function() {
      messenger.saySentenceLoop(sentence, speed);
    });
  },
  mapSentence: function(sentence) {
    const sentenceMap = [];
    for (let i = 0; i < sentence.length; i++) {
      sentenceMap.push(...messenger.mapChar(sentence.charAt(i), i));
    }
    return sentenceMap;
  },
  mapChar: function(char, position) {
    return lists[char.charCodeAt(0)].map(function(pair) {
      const newX = pair[0] + (position * 4);
      return [newX, pair[1] + height];
    });
  },
  paintSentence: function(sentenceMap, speed, iter, max, callback){
    if (iter < max) {
      const listToPaint = sentenceMap.map(function(pair) {
        const newX = pair[0] + 7 - iter;
        if (0 <= newX && newX < 8 ) {
          return [newX, pair[1]+1];
        }
      }).filter((item) => item !== undefined);
      
      pad.paint(pad.colors.red, listToPaint);
      
      sentenceLoop = setTimeout(function () {
        pad.cleanAll();
        messenger.paintSentence(sentenceMap, speed, iter + 1, max, callback);
      }, speed);
    } else {
      callback && callback();
    }
  },
}

module.exports = messenger;