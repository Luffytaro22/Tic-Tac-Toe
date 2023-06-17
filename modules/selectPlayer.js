const span = document.getElementById('player-number');
let player;
function selectPlayer() {
  if (span.textContent === '') {
    player = 'player1';
    span.textcontent = '1';
  } else {
    if (span.textcontent === '1') {
      player = 'player2';
      span.textcontent = '2';
    } else {
      player = 'player1';
      span.textContent = '1';
    }
  }
}

export { player, selectPlayer };