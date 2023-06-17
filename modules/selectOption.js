import { player } from './selectPlayer.js';

let choice;
function selectOptionX() {
  choice = 'X';
}

function selectOptionO() {
  choice = 'O';
}

export { choice, selectOptionO, selectOptionX };