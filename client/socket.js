(function(){
  const socket = io();

  const buttonStart = document.querySelector('#btnStart');
  const buttonFinish = document.querySelector('#btnFinish');
  const container = document.querySelector('#container');

  socket.on('server connected', function(msg){
    console.log('Server connected');

    buttonStart.addEventListener('click', (e) => {
      socket.emit('connect client');
    });

    buttonFinish.addEventListener('click', (e) => {
      socket.emit('disconnect client');
    });
  });

  socket.on('pad message', function(msg){
    console.log('pad message: ', msg);
  });




})();