const span = document.getElementById('player-number');
let player;
function selectPlayer() {
  if (span.textContent === '') {
    player = 1;
    span.textcontent = '1';
  } else {
    if (span.textcontent === '1') {
      player = 2;
      span.textcontent = '2';
    } else {
      player = 1;
      span.textContent = '1';
    }
  }
}

export { player, selectPlayer };