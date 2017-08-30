(function() {
  const buttonStart = document.querySelector('#btnStart');
  const buttonFinish = document.querySelector('#btnFinish');
  const container = document.querySelector('#container');

  buttonStart.addEventListener('click', (e) => {
    socket.emit('client connected');
  });

  buttonFinish.addEventListener('click', (e) => {
    socket.emit('client disconnected');
  });
})();