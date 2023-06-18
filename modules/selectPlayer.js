let player = '';
function selectPlayer() {
  const player1 = document.querySelector('.players:first-child');
  const player2 = document.querySelector('.players:last-child');
  if (!player1.classList.contains('player-turn') && !player2.classList.contains('player-turn')) {
    player = 'player1';
    player1.classList.add('player-turn');
  } else if (player1.classList.contains('player-turn')) {
    player = 'player2';
    player1.classList.remove('player-turn');
    player2.classList.add('player-turn');
  } else {
    player = 'player1';
    player2.classList.remove('player-turn');
    player1.classList.add('player-turn');
  }
}

export { player, selectPlayer };