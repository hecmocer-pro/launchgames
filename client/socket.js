(function(){
  const socket = io();
  let selectedGame;

  socket.on('server socket connected', function(msg){
    console.log('Server socket connected');

    openGames.forEach(openGame => {
      openGame.addEventListener('click', (e) => {
        selectedGame = e.currentTarget.dataset.game;
        socket.emit('connect client');
      });
    });

    closeGames.forEach(closeGame => {
      closeGame.addEventListener('click', (e) => {
        socket.emit('disconnect client');
      });
    });
  });

  socket.on('pad message', (msg) => {
    console.log('pad message: ', msg);
  });

  socket.on('launchpad status', (msg) => {
    openToast(msg);
    if (msg === 'launchpad connect success'){
      socket.emit('launch game', selectedGame);
    }
    if (msg === 'launchpad disconnect success'){
      socket.emit('kill game', selectedGame);
    }
  })
})();