import { players } from '../modules/players.js';

function selectOptionX() {
  const seleContainer = document.getElementById('selection-container');
  players.player1.choice = 'X';
  players.player2.choice = 'O';
  seleContainer.classList.add('hide');
}

function selectOptionO() {
  const seleContainer = document.getElementById('selection-container');
  players.player1.choice = 'O';
  players.player2.choice = 'X';
  seleContainer.classList.add('hide');
}

export { selectOptionO, selectOptionX };