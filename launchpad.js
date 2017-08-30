"use strict";

const Launchpad = require('launchpad-mini');
let pad = new Launchpad();

pad.connect = function(){
  console.log('CONNECT')
}

pad.disconnect = function(){
  console.log('DISCONNECT')
}

module.exports = pad;

// socket.on('client message', function(msg){
  //   console.log('message: ' + msg);
  //   if(msg === 'START') {
  //     pad.connect().then( () => {     // Auto-detect Launchpad
  //       pad.reset( 3 );             // Make Launchpad glow yellow
  //       pad.on( 'key', k => {
  //           pad.col( pad.red, k );  // Turn on buttons on press
  //           socket.emit('pad message', k);
  //       } );
  //     } );
  //   } else if(msg === 'FINISH') {
  //     pad.reset( 0 );
  //     pad.disconnect();
  //   }
  // });