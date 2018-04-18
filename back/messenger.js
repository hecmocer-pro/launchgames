"use strict"

const lists = require('./launchpadLists.js');
let pad;
let sentence = 'hello world';
let height = 1;
let speed = 150;

const messenger = {
  init: function(utils) {
    pad = utils;
    messenger.saySentence(sentence, function() {
      messenger.init(utils);
    });
  },
  padFunction: function(k, isPressed) {
    if (isPressed) {
      if(pad.isTopControl(k,2)) {
        speed += 10;
      } else if(pad.isTopControl(k,3)) {
        speed -= 10;
      }
      console.log(speed);
    }
  },
  saySentence: function(sentence, callback) {
    const sentenceMap = messenger.mapSentence(sentence);
    messenger.paintSentence(sentenceMap, 0, 8 + sentence.length * 4, callback);
  },
  mapSentence: function(sentence) {
    const sentenceMap = [];
    for (let i = 0; i < sentence.length; i++) {
      sentenceMap.push(...messenger.mapChar(sentence.charAt(i), i));
    }
    return sentenceMap;
  },
  mapChar: function(char, position) {
    return lists[char].map(function(pair) {
      const newX = pair[0] + (position * 4);
      return [newX, pair[1] + height];
    });
  },
  paintSentence: function(sentenceMap, iter, max, callback){
    if (iter < max) {
      const listToPaint = sentenceMap.map(function(pair) {
        const newX = pair[0] + 7 - iter;
        if (0 <= newX && newX < 8 ) {
          return [newX, pair[1]+1];
        }
      }).filter((item) => item !== undefined);
      
      pad.paint(pad.colors.red, listToPaint);
      
      setTimeout(function () {
        pad.cleanAll();
        messenger.paintSentence(sentenceMap, iter + 1, max, callback);
      }, speed);
    } else {
      callback && callback();
    }
  },

  //   pad.paint(pad.colors.red, listToPaint);
  // },
  // paint: function(char) {
  //   if (char === 'a'){
  //     pad.paint(pad.colors.red, lists.a);
  //   }
  //   else if (char === 'b'){
  //     pad.paint(pad.colors.red, lists.b);
  //   }
  //   else if (char === 'c'){
  //     pad.paint(pad.colors.red, lists.c);
  //   }
  //   else if (char === 'd'){
  //     pad.paint(pad.colors.red, lists.d);
  //   }
  //   else if (char === 'e'){
  //     pad.paint(pad.colors.red, lists.e);
  //   }
  //   else if (char === 'f'){
  //     pad.paint(pad.colors.red, lists.f);
  //   }
  //   else if (char === 'g'){
  //     pad.paint(pad.colors.red, lists.g);
  //   }
  //   else if (char === 'h'){
  //     pad.paint(pad.colors.red, lists.h);
  //   }
  //   else if (char === 'i'){
  //     pad.paint(pad.colors.red, lists.i);
  //   }
  //   else if (char === 'j'){
  //     pad.paint(pad.colors.red, lists.j);
  //   }
  //   else if (char ===  'k'){
  //     pad.paint(pad.colors.red, lists.k);
  //   }
  //   else if (char ===  'l'){
  //     pad.paint(pad.colors.red, lists.l);
  //   }
  //   else if (char ===  'm'){
  //     pad.paint(pad.colors.red, lists.m);
  //   }
  //   else if (char ===  'n'){
  //     pad.paint(pad.colors.red, lists.n);
  //   }
  //   else if (char ===  'o'){
  //     pad.paint(pad.colors.red, lists.o);
  //   }
  //   else if (char ===  'p'){
  //     pad.paint(pad.colors.red, lists.p);
  //   }
  //   else if (char ===  'q'){
  //     pad.paint(pad.colors.red, lists.q);
  //   }
  //   else if (char ===  'r'){
  //     pad.paint(pad.colors.red, lists.r);
  //   }
  //   else if (char ===  's'){
  //     pad.paint(pad.colors.red, lists.s);
  //   }
  //   else if (char ===  't'){
  //     pad.paint(pad.colors.red, lists.t);
  //   }
  //   else if (char ===  'u'){
  //     pad.paint(pad.colors.red, lists.u);
  //   }
  //   else if (char ===  'v'){
  //     pad.paint(pad.colors.red, lists.v);
  //   }
  //   else if (char ===  'x'){
  //     pad.paint(pad.colors.red, lists.x);
  //   }
  //   else if (char ===  'y'){
  //     pad.paint(pad.colors.red, lists.y);
  //   }
  //   else if (char ===  'z'){
  //     pad.paint(pad.colors.red, lists.z);
  //   }
  // }
}

module.exports = messenger;