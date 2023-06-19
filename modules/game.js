import { player, selectPlayer } from './selectPlayer.js';
import { players } from './players.js';

export default function game(event) {
  const choose = players.get()[`${player}`].choice;
  // If the div is not empty, return.
  if (event.target.textContent) return;
  // If it's empty then assign it the selected choice.
  event.target.textContent = choose;
  event.target.classList.add('animation');
  // To the selected player and the selected choice, add the position fo the div.
  players.get()[`${player}`][`${choose}`].push(JSON.parse(event.target.id));
  selectPlayer();
}