import { players } from './players.js';
import game from './game.js';

function selectOptionX() {
  const seleContainer = document.getElementById('selection-container');
  players.player1.choice = 'X';
  players.player2.choice = 'O';
  seleContainer.classList.add('hide');
  // Select the created divs.
  const divs = document.querySelectorAll('.celds');
  // To each div assign the selected choice.
  divs.forEach((div) => div.addEventListener('click', game));
}

function selectOptionO() {
  const seleContainer = document.getElementById('selection-container');
  players.player1.choice = 'O';
  players.player2.choice = 'X';
  seleContainer.classList.add('hide');
  // Select the created divs.
  const divs = document.querySelectorAll('.celds');
  // To each div assign the selected choice.
  divs.forEach((div) => div.addEventListener('click', game));
}

export { selectOptionO, selectOptionX };