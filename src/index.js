import './styles.css';
import displayGameboard from '../modules/gameboard.js';
import { selectPlayer } from '../modules/selectPlayer.js';
import { selectOption } from '../modules/selectOption.js';
import displayWinner from '../modules/winner.js';
import { players } from '../modules/players.js';
import game from "../modules/game";

// require('../modules/selectOption.js');

const chooseX = document.getElementById('x');
const chooseO = document.getElementById('o');
const winner = document.querySelector('#div-winner h5');
// Ads the default player 1 to the span.
selectPlayer();

// Display the gameboard.
displayGameboard();

// Adds listeners to the option selected.
chooseX.addEventListener('click', selectOption);
chooseO.addEventListener('click', selectOption);

const divs = document.querySelectorAll('.celds');
let player1X; let player1O; let player2X; let
  player2O;
setInterval(() => {
  player1X = players.player1.X.length;
  player1O = players.player1.O.length;
  player2X = players.player2.X.length;
  player2O = players.player2.O.length;
  if (((player1X || player1O) === 3) || ((player2X || player2O) === 3)) {
    if (displayWinner()) {
      winner.textContent = displayWinner();
      divs.forEach((div) => div.removeEventListener('click', game));
    }
  } else if ((player1X || player1O) >= 4 || (player2X || player2O) >= 4) {
    winner.textContent = "It's a draw!";
    divs.forEach((div) => div.removeEventListener('click', game));
  }
}, 100);
