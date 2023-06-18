export default function hide() {
  const h1 = document.querySelector('h1');
  const playersContainer = document.getElementById('players-container');
  const selContainer = document.getElementById('selection-container');
  const gameBoard = document.getElementById('gameboard-container');

  // Hide the first elements
  h1.classList.add('hide');
  playersContainer.classList.add('hide');

  // Show the game
  selContainer.classList.remove('hide');
  gameBoard.classList.remove('hide');
}