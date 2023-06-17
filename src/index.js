import './styles.css';
import displayGameboard from '../modules/gameboard.js';
import { selectPlayer } from '../modules/selectPlayer.js';
import { selectOptionO, selectOptionX } from '../modules/selectOption.js';
import game from '../modules/game.js';
import displayWinner from '../modules/winner.js';
import { players } from '../modules/players.js';

//require('../modules/selectOption.js');

const chooseX = document.getElementById('x');
const chooseO = document.getElementById('o');
const winner = document.querySelector('#div-winner h5');
// Ads the default player 1 to the span.
selectPlayer();

// Display the gameboard.
displayGameboard();

// Select the created divs.
const divs = document.querySelectorAll('.celds');

// Adds listeners to the option selected.
chooseX.addEventListener('click', selectOptionX);
chooseO.addEventListener('click', selectOptionO);

// To each div assign the selected choice.
divs.forEach((div) => div.addEventListener('click', game));

setInterval(() => {
  let player1X = players.player1.X.length;
  let player1O = players.player1.O.length;
  let player2X = players.player2.X.length;
  let player2O = players.player2.O.length;

  if ((player1X || player1O) >= 3 || (player2X || player2O) >= 3) {
    winner.textContent = displayWinner();
  }
}, 1000);
