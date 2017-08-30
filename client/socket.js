(function(){
  const socket = io();

  socket.on('server connected', function(msg){
    console.log('Server connected');
  });

  socket.on('pad message', function(msg){
    console.log('pad message: ', msg);
  });
})();