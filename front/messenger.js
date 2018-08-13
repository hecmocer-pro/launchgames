(function() {
  const textarea = document.querySelector('#messenger-textarea');
  const btnSpeedDown10 = document.querySelector('#messenger-speedDown10');
  const btnSpeedDown = document.querySelector('#messenger-speedDown');
  const btnSpeedUp = document.querySelector('#messenger-speedUp');
  const btnSpeedUp10 = document.querySelector('#messenger-speedUp10');
  const spanSpeed = document.querySelector('#messenger-speed');
  const btnApply = document.querySelector('#messenger-apply');
  let speed = 50;
  const maxSpeed = 200;
  const minSpeed = 1;
  let text = 'lorem ipsum';

  textarea.value = text;
  updateSpeed(speed);


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

  function updateSpeed(newVal) {
    if (newVal > minSpeed && newVal < maxSpeed) {
      speed = newVal;
    } else {
      speed = newVal <= minSpeed ? minSpeed : maxSpeed;
    }
    spanSpeed.innerHTML = speed;
  }

  function applyChanges() {
    socketF.emit('Messenger update', {
      text: textarea.value,
      speed: maxSpeed - speed
    });
  }
  // input.addEventListener('onchange', function(){

  // });
})();