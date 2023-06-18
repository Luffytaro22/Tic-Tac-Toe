import { players } from './players.js';

// Function to generate combinations without repetition.
function combinationsWithoutRepetition(arr) {
  const result = [];

  // Función auxiliar recursiva para generar las combinaciones sin repetición
  function generateCombinations(current, remaining, level) {
    if (level === arr.length) {
      result.push(current.slice()); // Agregar una copia de la combinación actual al resultado
      return;
    }

    const currentSet = new Set(current);

    for (let i = 0; i < remaining.length; i += 1) {
      const next = current.concat([remaining[i]]);

      // Verificar si el elemento ya ha sido utilizado en combinaciones anteriores
      if (!currentSet.has(remaining[i])) {
        generateCombinations(next, remaining, level + 1); // Llamada recursiva
      }
    }
  }

  generateCombinations([], arr, 0);
  return result;
}
const comb1 = combinationsWithoutRepetition([[1, 1], [1, 2], [1, 3]]);// First row.
const comb4 = combinationsWithoutRepetition([[2, 1], [2, 2], [2, 3]]);// Second row.
const comb3 = combinationsWithoutRepetition([[3, 1], [3, 2], [3, 3]]);// Third row.
const comb2 = combinationsWithoutRepetition([[1, 1], [2, 2], [3, 3]]);// First diagonal.
const comb8 = combinationsWithoutRepetition([[1, 3], [2, 2], [3, 1]]);// Second diagonal.
const comb5 = combinationsWithoutRepetition([[1, 1], [2, 1], [3, 1]]);// First column.
const comb6 = combinationsWithoutRepetition([[1, 2], [2, 2], [3, 2]]);// Second column.
const comb7 = combinationsWithoutRepetition([[1, 3], [2, 3], [3, 3]]);// Third column.
const combs = [comb1, comb2, comb3, comb4, comb5, comb6, comb7, comb8];

export default function displayWinner() {
  for (let j = 0; j < combs.length; j += 1) {
    for (let i = 0; i < combs[j].length; i += 1) {
      if ((`${players.get().player1.X}` || `${players.get().player1.O}`) === `${combs[j][i]}`) {
        const score1 = document.querySelector('.players:first-child .score');
        const player1 = document.querySelector('.players:first-child p');
        let increase = JSON.parse(score1.textContent) + 1;
        score1.textContent = `${increase}`;
        return `${player1.textContent} wins this round!`;
      } if ((`${players.get().player2.X}` || `${players.get().player2.O}`) === `${combs[j][i]}`) {
        const score2 = document.querySelector('.players:last-child .score');
        const player2 = document.querySelector('.players:last-child p');
        let increase = JSON.parse(score2.textContent) + 1;
        score2.textContent = `${increase}`;
        return `${player2.textContent} wins this round!`;
      }
    }
  }
}