import './styles.css';
import displayGameboard from '../modules/gameboard.js';
import { selectPlayer } from '../modules/selectPlayer.js';
import selectOption from '../modules/selectOption.js';
import displayWinner from '../modules/winner.js';
import { players } from '../modules/players.js';
import game from '../modules/game.js';
import addPlayer from '../modules/addPlayer.js';
import hide from '../modules/hide.js';
import refresh from '../modules/refresh.js';
import webIcon from './assets/tic-tac-toe.png';

const link = document.createElement('link');
link.href = webIcon;
link.rel = 'icon';
const head = document.querySelector('head');
head.appendChild(link);

const chooseX = document.getElementById('x');
const chooseO = document.getElementById('o');
const winner = document.querySelector('#div-winner h5');
const winnerDiv = document.getElementById('div-winner');
const enterIcon = document.getElementById('enter-icon');
const inputNick = document.getElementById('nickname');
const divPlayers = document.getElementById('players');
const refreshButton = document.getElementById('refresh-button');

enterIcon.addEventListener('click', () => {
  if (inputNick.value !== '') {
    addPlayer();
    inputNick.value = '';
    if (divPlayers.childElementCount === 2) {
      hide();
      selectPlayer();
    }
  }
});
// Display the gameboard.
displayGameboard();

// Adds listeners to the option selected.
chooseX.addEventListener('click', selectOption);
chooseO.addEventListener('click', selectOption);
function initializeGame() {
  const divs = document.querySelectorAll('.celds');
  let player1X; let player1O; let player2X; let
    player2O;
  const interval = setInterval(() => {
    player1X = players.get().player1.X.length;
    player1O = players.get().player1.O.length;
    player2X = players.get().player2.X.length;
    player2O = players.get().player2.O.length;
    if (((player1X || player1O) === 3) || ((player2X || player2O) === 3)) {
      if (displayWinner()) {
        clearInterval(interval);
        winner.textContent = displayWinner();
        winnerDiv.classList.remove('hide');
        winnerDiv.classList.add('pop-up');
        divs.forEach((div) => div.removeEventListener('click', game));
      }
    } else if ((player1X || player1O) >= 4 || (player2X || player2O) >= 4) {
      clearInterval(interval);
      winner.textContent = "It's a draw!";
      winnerDiv.classList.remove('hide');
      winnerDiv.classList.add('pop-up');
      divs.forEach((div) => div.removeEventListener('click', game));
    }
  }, 100);

  /*window.addEventListener('click', (event) => {
    if (!winnerDiv.contains(event.target)) {
      winnerDiv.classList.remove('pop-up');
    }
  });*/
}
initializeGame();

refreshButton.addEventListener('click', () => {
  refresh();
  initializeGame();
});