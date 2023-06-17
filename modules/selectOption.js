import { player } from './selectPlayer.js';

let choice;
function selectOptionX() {
  choice = 'x';
}

function selectOptionO() {
  choice = 'O';
}

export { choice, selectOptionO, selectOptionX };