const openGames = document.querySelectorAll('.openGame:not(.WIP)');
const closeGames = document.querySelectorAll('.closeGame');
const games = document.querySelectorAll('.game');
const toastSlot = document.querySelector('#toastSlot');

(function initButtons() {
  openGames.forEach((openGame) => {
    openGame.addEventListener('click', (e) => {
      games.forEach((game) => {
        if(openGame.dataset.game === game.dataset.game){
          show(game);
        } else {
          hide(game);
        }
      });
    });
  });
  closeGames.forEach((closeGame) => {
    closeGame.addEventListener('click', (e) => {
      games.forEach((game) => {
        if(closeGame.dataset.game === game.dataset.game){
          hide(game);
        }
      });
    });
  });
})();

function show(node){
  node.classList.add('showing');
  node.classList.remove('hidden');
  setTimeout(() => {
    node.classList.remove('showing');
  }, 600);
}

function hide(node){
  node.classList.add('hiding');
  setTimeout(() => {
    node.classList.add('hidden');
    node.classList.remove('hiding');
  }, 600);
}

function openToast(msg){
  let toast = document.createElement('DIV');
  toast.classList.add('toast');
  toast.innerHTML = `<p>${msg}</p>`;

  toastSlot.appendChild(toast);

  toast.classList.add('opened');
  setTimeout(() => {
    toast.classList.remove('opened');
    setTimeout(() => {
      toastSlot.removeChild(toast);
     }, 1000)
  }, 3000);
}