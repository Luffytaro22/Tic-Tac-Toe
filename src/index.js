import './styles.css';
import displayGameboard from '../modules/gameboard.js';
import { selectPlayer } from '../modules/selectPlayer.js';
import { selectOptionO, selectOptionX } from '../modules/selectOption.js';
import displayWinner from '../modules/winner.js';
import { players } from '../modules/players.js';

// require('../modules/selectOption.js');

const chooseX = document.getElementById('x');
const chooseO = document.getElementById('o');
const winner = document.querySelector('#div-winner h5');
// Ads the default player 1 to the span.
selectPlayer();

// Display the gameboard.
displayGameboard();

// Adds listeners to the option selected.
chooseX.addEventListener('click', selectOptionX);
chooseO.addEventListener('click', selectOptionO);

let player1X; let player1O; let player2X; let
  player2O;
setInterval(() => {
  player1X = players.player1.X.length;
  player1O = players.player1.O.length;
  player2X = players.player2.X.length;
  player2O = players.player2.O.length;
  if ((player1X || player1O) >= 3 || (player2X || player2O) >= 3) {
    winner.textContent = displayWinner();
  }
}, 10);
