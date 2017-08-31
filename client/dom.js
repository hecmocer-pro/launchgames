const openGames = document.querySelectorAll('.openGame:not(.WIP)');
const closeGames = document.querySelectorAll('.closeGame');
const games = document.querySelectorAll('.game');

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