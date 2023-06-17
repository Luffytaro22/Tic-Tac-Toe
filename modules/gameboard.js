const container = document.getElementById('gameboard-container');

export default function displayGameboard() {
  for (let i = 1; i <= 3; i += 1) {
    for (let j = 1; j <= 3; j += 1) {
      const div = document.createElement('div');
      div.classList.add('celds');
      div.id = `[${i}, ${j}]`;
      container.appendChild(div);
    }
  }
}
