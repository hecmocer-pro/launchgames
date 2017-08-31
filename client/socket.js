(function(){
  const socket = io();

  socket.on('server socket connected', function(msg){
    console.log('Server socket connected');

    openGames.forEach(openGame => {
      openGame.addEventListener('click', (e) => {
        socket.emit('connect client');
      });
    });

    closeGames.forEach(closeGame => {
      closeGame.addEventListener('click', (e) => {
        socket.emit('disconnect client');
      });
    });
  });

  socket.on('pad message', function(msg){
    console.log('pad message: ', msg);
  });
})();