const selectedGame = 'Messages';

(function() {
  const textarea = document.querySelector('#messenger-textarea');
  const btnSpeedDown10 = document.querySelector('#messenger-speedDown10');
  const btnSpeedDown = document.querySelector('#messenger-speedDown');
  const btnSpeedUp = document.querySelector('#messenger-speedUp');
  const btnSpeedUp10 = document.querySelector('#messenger-speedUp10');
  const spanSpeed = document.querySelector('#messenger-speed');
  const btnApply = document.querySelector('#messenger-apply');
  const btnLoop = document.querySelector('#messenger-loop');
  
  const maxSpeed = 200;
  const minSpeed = 1;
  let speed = 50;
  let text = 'lorem ipsum';
  let loop = false;

  textarea.value = text;
  updateSpeed(speed);
  updateLoop(loop);


  btnSpeedUp.addEventListener('click', function() {
    updateSpeed(speed + 1);
  });
  btnSpeedDown.addEventListener('click', function() {
    updateSpeed(speed - 1);
  });
  btnSpeedUp10.addEventListener('click', function() {
    updateSpeed(speed + 10);
  });
  btnSpeedDown10.addEventListener('click', function() {
    updateSpeed(speed - 10);
  });
  btnApply.addEventListener('click', function() {
    applyChanges();
  });
  btnLoop.addEventListener('click', function() {
    updateLoop(!loop);
  });

  function updateSpeed(newVal) {
    if (newVal > minSpeed && newVal < maxSpeed) {
      speed = newVal;
    } else {
      speed = newVal <= minSpeed ? minSpeed : maxSpeed;
    }
    spanSpeed.innerHTML = speed;
  }
  function updateLoop(newVal) {
    loop = newVal;
    btnLoop.innerHTML = `LOOP ${loop ? '✓' : '✖'}`;
  }

  function applyChanges() {
    socketF.emit('Messenger update', {
      text: textarea.value,
      speed: maxSpeed - speed,
      loop: loop,
    });
  }
  // input.addEventListener('onchange', function(){

  // });
})();