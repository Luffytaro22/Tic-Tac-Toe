let player;
function selectPlayer() {
  const span = document.getElementById('player-number');
  if (span.textContent === '') {
    player = 'player1';
    span.textContent = '1';
  } else {
    if (span.textContent === '1') {
      player = 'player2';
      span.textContent = '2';
    } else {
      player = 'player1';
      span.textContent = '1';
    }
  }
}

export { player, selectPlayer };