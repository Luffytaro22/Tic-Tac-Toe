export default function addPlayer() {
  // Create elements.
  const divPlayers = document.getElementById('players');
  const p = document.createElement('p');
  const container = document.createElement('div');
  const span = document.createElement('span');
  const inputNick = document.getElementById('nickname');

  // Add classes
  container.classList.add('players');
  span.classList.add('score');

  // Append elements.
  p.textContent = inputNick.value;
  span.textContent = '0';
  container.appendChild(p);
  container.appendChild(span);
  divPlayers.appendChild(container);
}