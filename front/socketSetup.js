const socketF = io();
let selectedGame;

socketF.on('Socket ready', function(msg){
  openGames.forEach(openGame => {
    openGame.addEventListener('click', (e) => {
      selectedGame = e.currentTarget.dataset.game;
      socketF.emit('Connect Launchpad');
    });
  console.log('Socket configurado en front');        
  });

  closeGames.forEach(closeGame => {
    closeGame.addEventListener('click', (e) => {
      socketF.emit('Disconnect Launchpad');
    });
  });
});

// socketF.on('pad message', (msg) => {
//   console.log('pad message: ', msg);
// });

socketF.on('LAUNCHPAD_STATUS', (data) => {
  openToast(data.msg);
  if (data.statusTo === 'Connect' && data.code === 'Success'){
    socketF.emit('Launch game', selectedGame);
  }
  if (data.statusTo === 'Disconnect' && data.code === 'Success'){
    socketF.emit('Kill game', selectedGame);
  }
});