import { player } from './selectPlayer.js';
import { choice } from './selectOption.js';
import { players } from './players.js';

export default function game(event) {
  // If the div is not empty, return.
  if (!event.target.textContent) return;
  // If it's empty then assign it the selected choice.
  event.target.textContent = choice;
  // To the selected player and the selected choice, add the position fo the div.
  players[`${player}`][`${choice}`].push(JSON.parse(event.target.id));
}