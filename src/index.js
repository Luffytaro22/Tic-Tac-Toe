import './styles.css';
import displayGameboard from '../modules/gameboard.js';
import { selectPlayer } from '../modules/selectPlayer.js';
import { selectOptionO, selectOptionX } from '../modules/selectOption.js';
import game from '../modules/game.js';

const chooseX = document.getElementById('x');
const chooseO = document.getElementById('O');

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