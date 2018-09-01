const selectedGame = 'Animations';

(function() {
  const x = document.querySelector('#animations-x');
  const y = document.querySelector('#animations-y');
  const time = document.querySelector('#animations-time');
  const color = document.querySelector('#animations-color');
  const add = document.querySelector('#animations-add');
  const apply = document.querySelector('#animations-apply');
  const btnLoop = document.querySelector('#animations-loop');
  const save = document.querySelector('#animations-save');
  const sequenceOutput = document.querySelector('#animations-sequence');

  let loop = false;
  const sequence = [];
  _updateLoop(loop);

  btnLoop.addEventListener('click', function() {
    _updateLoop(!loop);
  });
  add.addEventListener('click', function() {
    const xValue = x.value;
    const yValue = y.value;
    const timeValue = time.value;
    const colorValue = color.value.toLowerCase();
    if (xValue >= 0 && yValue >= 0 && timeValue >= 0 && (colorValue == 'amber' || colorValue == 'red' || colorValue == 'green')){
      _updateSequence();
      // _cleanInputs();
    }
  });

  apply.addEventListener('click', function () {
    socketF.emit('Animations update', {
      sequence: JSON.parse(sequenceOutput.innerHTML),
      loop: true,
    });
  });

  function _updateLoop(newVal) {
    loop = newVal;
    btnLoop.innerHTML = `LOOP ${loop ? '✓' : '✖'}`;
  }

  function _updateSequence() {
    sequence.push({
      x: x.value,
      y: y.value,
      time: time.value,
      color: color.value,
    });
    sequenceOutput.innerHTML = JSON.stringify(sequence, undefined, 2);
  }

  function _cleanInputs() {
    x.value = null;
    y.value = null;
    time.value = null;
    color.value = null;  
  }
})();