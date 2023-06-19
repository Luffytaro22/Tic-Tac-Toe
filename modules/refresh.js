import { players } from './players.js';
import game from './game.js';

export default function refresh() {
  const newPlayers = {
    player1: {
      X: [],
      O: [],
      choice: players.get().player1.choice,
    },
    player2: {
      X: [],
      O: [],
      choice: players.get().player2.choice,
    },
  };
  players.set(newPlayers);
  const divs = document.querySelectorAll('.celds');
  const divWinner = document.getElementById('div-winner');
  divs.forEach((div) => {
    div.addEventListener('click', game);
    div.textContent = '';
    div.classList.remove('animation');
  });
  divWinner.classList.add('hide');
}
