"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./modules/addPlayer.js":
/*!******************************!*\
  !*** ./modules/addPlayer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addPlayer)
/* harmony export */ });
function addPlayer() {
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
  p.textContent = inputNick.value.trim();
  span.textContent = '0';
  container.appendChild(p);
  container.appendChild(span);
  divPlayers.appendChild(container);
}

/***/ }),

/***/ "./modules/game.js":
/*!*************************!*\
  !*** ./modules/game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _selectPlayer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectPlayer.js */ "./modules/selectPlayer.js");
/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players.js */ "./modules/players.js");



function game(event) {
  const choose = _players_js__WEBPACK_IMPORTED_MODULE_1__.players.get()[`${_selectPlayer_js__WEBPACK_IMPORTED_MODULE_0__.player}`].choice;
  // If the div is not empty, return.
  if (event.target.textContent) return;
  // If it's empty then assign it the selected choice.
  event.target.textContent = choose;
  event.target.classList.add('animation');
  // To the selected player and the selected choice, add the position fo the div.
  _players_js__WEBPACK_IMPORTED_MODULE_1__.players.get()[`${_selectPlayer_js__WEBPACK_IMPORTED_MODULE_0__.player}`][`${choose}`].push(JSON.parse(event.target.id));
  (0,_selectPlayer_js__WEBPACK_IMPORTED_MODULE_0__.selectPlayer)();
}

/***/ }),

/***/ "./modules/gameboard.js":
/*!******************************!*\
  !*** ./modules/gameboard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayGameboard)
/* harmony export */ });
const container = document.getElementById('gameboard-container');

function displayGameboard() {
  for (let i = 1; i <= 3; i += 1) {
    for (let j = 1; j <= 3; j += 1) {
      const div = document.createElement('div');
      div.classList.add('celds');
      div.id = `[${i}, ${j}]`;
      container.appendChild(div);
    }
  }
}


/***/ }),

/***/ "./modules/hide.js":
/*!*************************!*\
  !*** ./modules/hide.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hide)
/* harmony export */ });
function hide() {
  const h1 = document.querySelector('h1');
  const playersContainer = document.getElementById('players-container');
  const selContainer = document.getElementById('selection-container');
  const gameBoard = document.getElementById('gameboard-container');

  // Hide the first elements
  h1.classList.add('hide');
  playersContainer.classList.add('hide');

  // Show the game
  selContainer.classList.remove('hide');
  gameBoard.classList.remove('hide');
}

/***/ }),

/***/ "./modules/players.js":
/*!****************************!*\
  !*** ./modules/players.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   players: () => (/* binding */ players)
/* harmony export */ });
let Players = {
  player1: {
    X: [],
    O: [],
    choice: '',
  },
  player2: {
    X: [],
    O: [],
    choice: '',
  },
};

const players = {
  get() {
    return Players;
  },
  set(newPlayers) {
    Players = newPlayers;
  },
};


/***/ }),

/***/ "./modules/refresh.js":
/*!****************************!*\
  !*** ./modules/refresh.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ refresh)
/* harmony export */ });
/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players.js */ "./modules/players.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./modules/game.js");



function refresh() {
  const newPlayers = {
    player1: {
      X: [],
      O: [],
      choice: _players_js__WEBPACK_IMPORTED_MODULE_0__.players.get().player1.choice,
    },
    player2: {
      X: [],
      O: [],
      choice: _players_js__WEBPACK_IMPORTED_MODULE_0__.players.get().player2.choice,
    },
  };
  _players_js__WEBPACK_IMPORTED_MODULE_0__.players.set(newPlayers);
  const divs = document.querySelectorAll('.celds');
  const divWinner = document.getElementById('div-winner');
  divs.forEach((div) => {
    div.addEventListener('click', _game_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    div.textContent = '';
    div.classList.remove('animation');
  });
  divWinner.classList.add('hide');
}


/***/ }),

/***/ "./modules/selectOption.js":
/*!*********************************!*\
  !*** ./modules/selectOption.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ selectOption)
/* harmony export */ });
/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players.js */ "./modules/players.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./modules/game.js");



function selectOption(event) {
  const seleContainer = document.getElementById('selection-container');
  if (event.target.id === 'x') {
    _players_js__WEBPACK_IMPORTED_MODULE_0__.players.get().player1.choice = 'X';
    _players_js__WEBPACK_IMPORTED_MODULE_0__.players.get().player2.choice = 'O';
  } else {
    _players_js__WEBPACK_IMPORTED_MODULE_0__.players.get().player1.choice = 'O';
    _players_js__WEBPACK_IMPORTED_MODULE_0__.players.get().player2.choice = 'X';
  }
  seleContainer.classList.add('hide');
  // Select the created divs.
  const divs = document.querySelectorAll('.celds');
  // To each div assign the selected choice.
  divs.forEach((div) => div.addEventListener('click', _game_js__WEBPACK_IMPORTED_MODULE_1__["default"]));
}


/***/ }),

/***/ "./modules/selectPlayer.js":
/*!*********************************!*\
  !*** ./modules/selectPlayer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   player: () => (/* binding */ player),
/* harmony export */   selectPlayer: () => (/* binding */ selectPlayer)
/* harmony export */ });
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



/***/ }),

/***/ "./modules/winner.js":
/*!***************************!*\
  !*** ./modules/winner.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayWinner)
/* harmony export */ });
/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players.js */ "./modules/players.js");


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

function displayWinner() {
  for (let j = 0; j < combs.length; j += 1) {
    for (let i = 0; i < combs[j].length; i += 1) {
      if ((`${_players_js__WEBPACK_IMPORTED_MODULE_0__.players.get().player1.X}` || `${_players_js__WEBPACK_IMPORTED_MODULE_0__.players.get().player1.O}`) === `${combs[j][i]}`) {
        const score1 = document.querySelector('.players:first-child .score');
        const player1 = document.querySelector('.players:first-child p');
        const increase = JSON.parse(score1.textContent) + 0.5;
        score1.textContent = `${increase}`;
        return `${player1.textContent} wins this round!`;
      } if ((`${_players_js__WEBPACK_IMPORTED_MODULE_0__.players.get().player2.X}` || `${_players_js__WEBPACK_IMPORTED_MODULE_0__.players.get().player2.O}`) === `${combs[j][i]}`) {
        const score2 = document.querySelector('.players:last-child .score');
        const player2 = document.querySelector('.players:last-child p');
        const increase = JSON.parse(score2.textContent) + 0.5;
        score2.textContent = `${increase}`;
        return `${player2.textContent} wins this round!`;
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}

h4:first-child {
  border-right: 1px solid black;
  padding-right: 50px;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #c9c9b4;
  font-family: 'Noto Sans Japanese', sans-serif;
  font-size: 1.2em;
  animation-name: body;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
}

@keyframes body {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.animation {
  animation-name: celds;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
}

@keyframes celds {
  from {
    font-size: 0;
  }

  to {
    font-size: 2em;
  }
}

#players-container {
  display: flex;
  align-items: center;
  gap: 5px;
}

#nickname {
  outline: none;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid black;
  background: none;
  font-family: 'Noto Sans Japanese', sans-serif;
}

#options-container {
  display: flex;
  justify-content: center;
  gap: 50px;
  border: 1px solid black;
  width: 100px;
  border-radius: 10px;
  padding: 10px 50px;
}

.celds {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
}

.celds:hover,
#enter-icon:hover {
  cursor: pointer;
}

.celds:not(:nth-child(7), :nth-child(8), :nth-child(9)) {
  border-bottom: 2px solid black;
}

.celds:not(:nth-child(3), :nth-child(6), :nth-child(9)) {
  border-right: 2px solid black;
}

.player-turn {
  background-color: #fdfdfd;
  border: 1px solid black;
  animation-name: player-turn;
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  box-shadow: 0 0 5px 3px #930d29;
}

@keyframes player-turn {
  from {
    box-shadow: 0 0 5px 3px #930d29;
    transform: scale(0);
  }

  to {
    box-shadow: 0 0 5px 5px #930d29;
    transform: scale(1);
  }
}

.pop-up {
  position: fixed;
  z-index: 999;
  width: 50%;
  max-width: 280px;
  background-color: gray;
  text-align: center;
}

#selection-container.hide,
#gameboard-container.hide,
#players-container.hide,
#div-winner.hide,
.hide {
  display: none;
}

#gameboard-container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
}

#selection-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  gap: 30px;
}

#selection-container h4:hover {
  cursor: pointer;
}

#players {
  display: flex;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 50px;
}

.players {
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px 20px;
  border-radius: 20px;
}

#div-winner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  animation-name: pop-up;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  padding: 20px 30px;
  background-color: #d08702;
  border-radius: 5px;
  border: 1px solid black;
}

#refresh-button {
  padding: 10px 20px;
  border-radius: 5px;
  background: none;
  border: 1px solid black;
  transition: all 0.5s ease-in-out;
}

#refresh-button:hover {
  cursor: pointer;
  background-color: #c9c9b4;
  border: 1px solid beige;
}

@keyframes pop-up {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,yBAAyB;EACzB,6CAA6C;EAC7C,gBAAgB;EAChB,oBAAoB;EACpB,wBAAwB;EACxB,sCAAsC;AACxC;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,sCAAsC;AACxC;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,cAAc;EAChB;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,gBAAgB;EAChB,6CAA6C;AAC/C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,2BAA2B;EAC3B,wBAAwB;EACxB,sCAAsC;EACtC,+BAA+B;AACjC;;AAEA;EACE;IACE,+BAA+B;IAC/B,mBAAmB;EACrB;;EAEA;IACE,+BAA+B;IAC/B,mBAAmB;EACrB;AACF;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;;;;;EAKE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,sBAAsB;EACtB,sBAAsB;EACtB,sCAAsC;EACtC,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh4:first-child {\r\n  border-right: 1px solid black;\r\n  padding-right: 50px;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  background-color: #c9c9b4;\r\n  font-family: 'Noto Sans Japanese', sans-serif;\r\n  font-size: 1.2em;\r\n  animation-name: body;\r\n  animation-duration: 0.5s;\r\n  animation-timing-function: ease-in-out;\r\n}\r\n\r\n@keyframes body {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.animation {\r\n  animation-name: celds;\r\n  animation-duration: 0.5s;\r\n  animation-timing-function: ease-in-out;\r\n}\r\n\r\n@keyframes celds {\r\n  from {\r\n    font-size: 0;\r\n  }\r\n\r\n  to {\r\n    font-size: 2em;\r\n  }\r\n}\r\n\r\n#players-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n#nickname {\r\n  outline: none;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  border: 1px solid black;\r\n  background: none;\r\n  font-family: 'Noto Sans Japanese', sans-serif;\r\n}\r\n\r\n#options-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 50px;\r\n  border: 1px solid black;\r\n  width: 100px;\r\n  border-radius: 10px;\r\n  padding: 10px 50px;\r\n}\r\n\r\n.celds {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2em;\r\n}\r\n\r\n.celds:hover,\r\n#enter-icon:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.celds:not(:nth-child(7), :nth-child(8), :nth-child(9)) {\r\n  border-bottom: 2px solid black;\r\n}\r\n\r\n.celds:not(:nth-child(3), :nth-child(6), :nth-child(9)) {\r\n  border-right: 2px solid black;\r\n}\r\n\r\n.player-turn {\r\n  background-color: #fdfdfd;\r\n  border: 1px solid black;\r\n  animation-name: player-turn;\r\n  animation-duration: 0.2s;\r\n  animation-timing-function: ease-in-out;\r\n  box-shadow: 0 0 5px 3px #930d29;\r\n}\r\n\r\n@keyframes player-turn {\r\n  from {\r\n    box-shadow: 0 0 5px 3px #930d29;\r\n    transform: scale(0);\r\n  }\r\n\r\n  to {\r\n    box-shadow: 0 0 5px 5px #930d29;\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.pop-up {\r\n  position: fixed;\r\n  z-index: 999;\r\n  width: 50%;\r\n  max-width: 280px;\r\n  background-color: gray;\r\n  text-align: center;\r\n}\r\n\r\n#selection-container.hide,\r\n#gameboard-container.hide,\r\n#players-container.hide,\r\n#div-winner.hide,\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n#gameboard-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 100px);\r\n  grid-template-rows: repeat(3, 100px);\r\n}\r\n\r\n#selection-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 60px;\r\n  gap: 30px;\r\n}\r\n\r\n#selection-container h4:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n#players {\r\n  display: flex;\r\n  gap: 40px;\r\n  margin-top: 40px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.players {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n  padding: 10px 20px;\r\n  border-radius: 20px;\r\n}\r\n\r\n#div-winner {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 30px;\r\n  animation-name: pop-up;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-in-out;\r\n  padding: 20px 30px;\r\n  background-color: #d08702;\r\n  border-radius: 5px;\r\n  border: 1px solid black;\r\n}\r\n\r\n#refresh-button {\r\n  padding: 10px 20px;\r\n  border-radius: 5px;\r\n  background: none;\r\n  border: 1px solid black;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n#refresh-button:hover {\r\n  cursor: pointer;\r\n  background-color: #c9c9b4;\r\n  border: 1px solid beige;\r\n}\r\n\r\n@keyframes pop-up {\r\n  from {\r\n    transform: scale(0);\r\n  }\r\n\r\n  to {\r\n    transform: scale(1);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/gameboard.js */ "./modules/gameboard.js");
/* harmony import */ var _modules_selectPlayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/selectPlayer.js */ "./modules/selectPlayer.js");
/* harmony import */ var _modules_selectOption_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/selectOption.js */ "./modules/selectOption.js");
/* harmony import */ var _modules_winner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/winner.js */ "./modules/winner.js");
/* harmony import */ var _modules_players_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/players.js */ "./modules/players.js");
/* harmony import */ var _modules_game_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/game.js */ "./modules/game.js");
/* harmony import */ var _modules_addPlayer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/addPlayer.js */ "./modules/addPlayer.js");
/* harmony import */ var _modules_hide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/hide.js */ "./modules/hide.js");
/* harmony import */ var _modules_refresh_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/refresh.js */ "./modules/refresh.js");
/* harmony import */ var _assets_tic_tac_toe_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/tic-tac-toe.png */ "./src/assets/tic-tac-toe.png");












const link = document.createElement('link');
link.href = _assets_tic_tac_toe_png__WEBPACK_IMPORTED_MODULE_10__;
link.rel = 'icon';
const head = document.querySelector('head');
head.appendChild(link);

const chooseX = document.getElementById('x');
const chooseO = document.getElementById('o');
const winner = document.querySelector('#div-winner h5');
const winnerDiv = document.getElementById('div-winner');
const enterIcon = document.getElementById('enter-icon');
const inputNick = document.getElementById('nickname');
const divPlayers = document.getElementById('players');
const refreshButton = document.getElementById('refresh-button');

enterIcon.addEventListener('click', () => {
  if (inputNick.value !== '') {
    (0,_modules_addPlayer_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
    inputNick.value = '';
    if (divPlayers.childElementCount === 2) {
      (0,_modules_hide_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
      (0,_modules_selectPlayer_js__WEBPACK_IMPORTED_MODULE_2__.selectPlayer)();
    }
  }
});
// Display the gameboard.
(0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

// Adds listeners to the option selected.
chooseX.addEventListener('click', _modules_selectOption_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
chooseO.addEventListener('click', _modules_selectOption_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function initializeGame() {
  const divs = document.querySelectorAll('.celds');
  let player1X; let player1O; let player2X; let
    player2O;
  const interval = setInterval(() => {
    player1X = _modules_players_js__WEBPACK_IMPORTED_MODULE_5__.players.get().player1.X.length;
    player1O = _modules_players_js__WEBPACK_IMPORTED_MODULE_5__.players.get().player1.O.length;
    player2X = _modules_players_js__WEBPACK_IMPORTED_MODULE_5__.players.get().player2.X.length;
    player2O = _modules_players_js__WEBPACK_IMPORTED_MODULE_5__.players.get().player2.O.length;
    if (((player1X || player1O) === 3) || ((player2X || player2O) === 3)) {
      if ((0,_modules_winner_js__WEBPACK_IMPORTED_MODULE_4__["default"])()) {
        clearInterval(interval);
        winner.textContent = (0,_modules_winner_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
        winnerDiv.classList.remove('hide');
        winnerDiv.classList.add('pop-up');
        divs.forEach((div) => div.removeEventListener('click', _modules_game_js__WEBPACK_IMPORTED_MODULE_6__["default"]));
      }
    } else if ((player1X || player1O) >= 4 || (player2X || player2O) >= 4) {
      clearInterval(interval);
      winner.textContent = "It's a draw!";
      winnerDiv.classList.remove('hide');
      winnerDiv.classList.add('pop-up');
      divs.forEach((div) => div.removeEventListener('click', _modules_game_js__WEBPACK_IMPORTED_MODULE_6__["default"]));
    }
  }, 100);

  /* window.addEventListener('click', (event) => {
    if (!winnerDiv.contains(event.target)) {
      winnerDiv.classList.remove('pop-up');
    }
  }); */
}
initializeGame();

refreshButton.addEventListener('click', () => {
  (0,_modules_refresh_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
  initializeGame();
});

/***/ }),

/***/ "./src/assets/tic-tac-toe.png":
/*!************************************!*\
  !*** ./src/assets/tic-tac-toe.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70609e724553cf7cf7cb.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sU0FBUyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZ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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlFQUFTO0FBQ2I7QUFDQTtBQUNBLE1BQU0sNERBQUk7QUFDVixNQUFNLHNFQUFZO0FBQ2xCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZ0I7O0FBRWhCO0FBQ0Esa0NBQWtDLGdFQUFZO0FBQzlDLGtDQUFrQyxnRUFBWTtBQUM5QztBQUNBO0FBQ0EsZ0JBQWdCLGNBQWMsY0FBYztBQUM1QztBQUNBO0FBQ0EsZUFBZSx3REFBTztBQUN0QixlQUFlLHdEQUFPO0FBQ3RCLGVBQWUsd0RBQU87QUFDdEIsZUFBZSx3REFBTztBQUN0QjtBQUNBLFVBQVUsOERBQWE7QUFDdkI7QUFDQSw2QkFBNkIsOERBQWE7QUFDMUM7QUFDQTtBQUNBLCtEQUErRCx3REFBSTtBQUNuRTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCx3REFBSTtBQUNqRTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUc7QUFDTjtBQUNBOztBQUVBO0FBQ0EsRUFBRSwrREFBTztBQUNUO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL2FkZFBsYXllci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9oaWRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvcmVmcmVzaC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9zZWxlY3RPcHRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvc2VsZWN0UGxheWVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL3dpbm5lci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQbGF5ZXIoKSB7XG4gIC8vIENyZWF0ZSBlbGVtZW50cy5cbiAgY29uc3QgZGl2UGxheWVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJzJyk7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBpbnB1dE5pY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmlja25hbWUnKTtcblxuICAvLyBBZGQgY2xhc3Nlc1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGxheWVycycpO1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3Njb3JlJyk7XG5cbiAgLy8gQXBwZW5kIGVsZW1lbnRzLlxuICBwLnRleHRDb250ZW50ID0gaW5wdXROaWNrLnZhbHVlLnRyaW0oKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9ICcwJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHApO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIGRpdlBsYXllcnMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn0iLCJpbXBvcnQgeyBwbGF5ZXIsIHNlbGVjdFBsYXllciB9IGZyb20gJy4vc2VsZWN0UGxheWVyLmpzJztcbmltcG9ydCB7IHBsYXllcnMgfSBmcm9tICcuL3BsYXllcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lKGV2ZW50KSB7XG4gIGNvbnN0IGNob29zZSA9IHBsYXllcnMuZ2V0KClbYCR7cGxheWVyfWBdLmNob2ljZTtcbiAgLy8gSWYgdGhlIGRpdiBpcyBub3QgZW1wdHksIHJldHVybi5cbiAgaWYgKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCkgcmV0dXJuO1xuICAvLyBJZiBpdCdzIGVtcHR5IHRoZW4gYXNzaWduIGl0IHRoZSBzZWxlY3RlZCBjaG9pY2UuXG4gIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9IGNob29zZTtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGlvbicpO1xuICAvLyBUbyB0aGUgc2VsZWN0ZWQgcGxheWVyIGFuZCB0aGUgc2VsZWN0ZWQgY2hvaWNlLCBhZGQgdGhlIHBvc2l0aW9uIGZvIHRoZSBkaXYuXG4gIHBsYXllcnMuZ2V0KClbYCR7cGxheWVyfWBdW2Ake2Nob29zZX1gXS5wdXNoKEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LmlkKSk7XG4gIHNlbGVjdFBsYXllcigpO1xufSIsImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlHYW1lYm9hcmQoKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDM7IGogKz0gMSkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2VsZHMnKTtcbiAgICAgIGRpdi5pZCA9IGBbJHtpfSwgJHtqfV1gO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaWRlKCkge1xuICBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gIGNvbnN0IHBsYXllcnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVycy1jb250YWluZXInKTtcbiAgY29uc3Qgc2VsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGlvbi1jb250YWluZXInKTtcbiAgY29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1jb250YWluZXInKTtcblxuICAvLyBIaWRlIHRoZSBmaXJzdCBlbGVtZW50c1xuICBoMS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIHBsYXllcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gIC8vIFNob3cgdGhlIGdhbWVcbiAgc2VsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgZ2FtZUJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbn0iLCJsZXQgUGxheWVycyA9IHtcbiAgcGxheWVyMToge1xuICAgIFg6IFtdLFxuICAgIE86IFtdLFxuICAgIGNob2ljZTogJycsXG4gIH0sXG4gIHBsYXllcjI6IHtcbiAgICBYOiBbXSxcbiAgICBPOiBbXSxcbiAgICBjaG9pY2U6ICcnLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHBsYXllcnMgPSB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUGxheWVycztcbiAgfSxcbiAgc2V0KG5ld1BsYXllcnMpIHtcbiAgICBQbGF5ZXJzID0gbmV3UGxheWVycztcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBwbGF5ZXJzIH0gZnJvbSAnLi9wbGF5ZXJzLmpzJztcbmltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gIGNvbnN0IG5ld1BsYXllcnMgPSB7XG4gICAgcGxheWVyMToge1xuICAgICAgWDogW10sXG4gICAgICBPOiBbXSxcbiAgICAgIGNob2ljZTogcGxheWVycy5nZXQoKS5wbGF5ZXIxLmNob2ljZSxcbiAgICB9LFxuICAgIHBsYXllcjI6IHtcbiAgICAgIFg6IFtdLFxuICAgICAgTzogW10sXG4gICAgICBjaG9pY2U6IHBsYXllcnMuZ2V0KCkucGxheWVyMi5jaG9pY2UsXG4gICAgfSxcbiAgfTtcbiAgcGxheWVycy5zZXQobmV3UGxheWVycyk7XG4gIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsZHMnKTtcbiAgY29uc3QgZGl2V2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpdi13aW5uZXInKTtcbiAgZGl2cy5mb3JFYWNoKChkaXYpID0+IHtcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSAnJztcbiAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0aW9uJyk7XG4gIH0pO1xuICBkaXZXaW5uZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xufVxuIiwiaW1wb3J0IHsgcGxheWVycyB9IGZyb20gJy4vcGxheWVycy5qcyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWxlY3RPcHRpb24oZXZlbnQpIHtcbiAgY29uc3Qgc2VsZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3Rpb24tY29udGFpbmVyJyk7XG4gIGlmIChldmVudC50YXJnZXQuaWQgPT09ICd4Jykge1xuICAgIHBsYXllcnMuZ2V0KCkucGxheWVyMS5jaG9pY2UgPSAnWCc7XG4gICAgcGxheWVycy5nZXQoKS5wbGF5ZXIyLmNob2ljZSA9ICdPJztcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXJzLmdldCgpLnBsYXllcjEuY2hvaWNlID0gJ08nO1xuICAgIHBsYXllcnMuZ2V0KCkucGxheWVyMi5jaG9pY2UgPSAnWCc7XG4gIH1cbiAgc2VsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIC8vIFNlbGVjdCB0aGUgY3JlYXRlZCBkaXZzLlxuICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGRzJyk7XG4gIC8vIFRvIGVhY2ggZGl2IGFzc2lnbiB0aGUgc2VsZWN0ZWQgY2hvaWNlLlxuICBkaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZSkpO1xufVxuIiwibGV0IHBsYXllciA9ICcnO1xuZnVuY3Rpb24gc2VsZWN0UGxheWVyKCkge1xuICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnM6Zmlyc3QtY2hpbGQnKTtcbiAgY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzOmxhc3QtY2hpbGQnKTtcbiAgaWYgKCFwbGF5ZXIxLmNsYXNzTGlzdC5jb250YWlucygncGxheWVyLXR1cm4nKSAmJiAhcGxheWVyMi5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXllci10dXJuJykpIHtcbiAgICBwbGF5ZXIgPSAncGxheWVyMSc7XG4gICAgcGxheWVyMS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHVybicpO1xuICB9IGVsc2UgaWYgKHBsYXllcjEuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5ZXItdHVybicpKSB7XG4gICAgcGxheWVyID0gJ3BsYXllcjInO1xuICAgIHBsYXllcjEuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyLXR1cm4nKTtcbiAgICBwbGF5ZXIyLmNsYXNzTGlzdC5hZGQoJ3BsYXllci10dXJuJyk7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyID0gJ3BsYXllcjEnO1xuICAgIHBsYXllcjIuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyLXR1cm4nKTtcbiAgICBwbGF5ZXIxLmNsYXNzTGlzdC5hZGQoJ3BsYXllci10dXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcGxheWVyLCBzZWxlY3RQbGF5ZXIgfTsiLCJpbXBvcnQgeyBwbGF5ZXJzIH0gZnJvbSAnLi9wbGF5ZXJzLmpzJztcblxuLy8gRnVuY3Rpb24gdG8gZ2VuZXJhdGUgY29tYmluYXRpb25zIHdpdGhvdXQgcmVwZXRpdGlvbi5cbmZ1bmN0aW9uIGNvbWJpbmF0aW9uc1dpdGhvdXRSZXBldGl0aW9uKGFycikge1xuICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAvLyBGdW5jacOzbiBhdXhpbGlhciByZWN1cnNpdmEgcGFyYSBnZW5lcmFyIGxhcyBjb21iaW5hY2lvbmVzIHNpbiByZXBldGljacOzblxuICBmdW5jdGlvbiBnZW5lcmF0ZUNvbWJpbmF0aW9ucyhjdXJyZW50LCByZW1haW5pbmcsIGxldmVsKSB7XG4gICAgaWYgKGxldmVsID09PSBhcnIubGVuZ3RoKSB7XG4gICAgICByZXN1bHQucHVzaChjdXJyZW50LnNsaWNlKCkpOyAvLyBBZ3JlZ2FyIHVuYSBjb3BpYSBkZSBsYSBjb21iaW5hY2nDs24gYWN0dWFsIGFsIHJlc3VsdGFkb1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRTZXQgPSBuZXcgU2V0KGN1cnJlbnQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1haW5pbmcubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5leHQgPSBjdXJyZW50LmNvbmNhdChbcmVtYWluaW5nW2ldXSk7XG5cbiAgICAgIC8vIFZlcmlmaWNhciBzaSBlbCBlbGVtZW50byB5YSBoYSBzaWRvIHV0aWxpemFkbyBlbiBjb21iaW5hY2lvbmVzIGFudGVyaW9yZXNcbiAgICAgIGlmICghY3VycmVudFNldC5oYXMocmVtYWluaW5nW2ldKSkge1xuICAgICAgICBnZW5lcmF0ZUNvbWJpbmF0aW9ucyhuZXh0LCByZW1haW5pbmcsIGxldmVsICsgMSk7IC8vIExsYW1hZGEgcmVjdXJzaXZhXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVDb21iaW5hdGlvbnMoW10sIGFyciwgMCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5jb25zdCBjb21iMSA9IGNvbWJpbmF0aW9uc1dpdGhvdXRSZXBldGl0aW9uKFtbMSwgMV0sIFsxLCAyXSwgWzEsIDNdXSk7Ly8gRmlyc3Qgcm93LlxuY29uc3QgY29tYjQgPSBjb21iaW5hdGlvbnNXaXRob3V0UmVwZXRpdGlvbihbWzIsIDFdLCBbMiwgMl0sIFsyLCAzXV0pOy8vIFNlY29uZCByb3cuXG5jb25zdCBjb21iMyA9IGNvbWJpbmF0aW9uc1dpdGhvdXRSZXBldGl0aW9uKFtbMywgMV0sIFszLCAyXSwgWzMsIDNdXSk7Ly8gVGhpcmQgcm93LlxuY29uc3QgY29tYjIgPSBjb21iaW5hdGlvbnNXaXRob3V0UmVwZXRpdGlvbihbWzEsIDFdLCBbMiwgMl0sIFszLCAzXV0pOy8vIEZpcnN0IGRpYWdvbmFsLlxuY29uc3QgY29tYjggPSBjb21iaW5hdGlvbnNXaXRob3V0UmVwZXRpdGlvbihbWzEsIDNdLCBbMiwgMl0sIFszLCAxXV0pOy8vIFNlY29uZCBkaWFnb25hbC5cbmNvbnN0IGNvbWI1ID0gY29tYmluYXRpb25zV2l0aG91dFJlcGV0aXRpb24oW1sxLCAxXSwgWzIsIDFdLCBbMywgMV1dKTsvLyBGaXJzdCBjb2x1bW4uXG5jb25zdCBjb21iNiA9IGNvbWJpbmF0aW9uc1dpdGhvdXRSZXBldGl0aW9uKFtbMSwgMl0sIFsyLCAyXSwgWzMsIDJdXSk7Ly8gU2Vjb25kIGNvbHVtbi5cbmNvbnN0IGNvbWI3ID0gY29tYmluYXRpb25zV2l0aG91dFJlcGV0aXRpb24oW1sxLCAzXSwgWzIsIDNdLCBbMywgM11dKTsvLyBUaGlyZCBjb2x1bW4uXG5jb25zdCBjb21icyA9IFtjb21iMSwgY29tYjIsIGNvbWIzLCBjb21iNCwgY29tYjUsIGNvbWI2LCBjb21iNywgY29tYjhdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5V2lubmVyKCkge1xuICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbWJzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21ic1tqXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKChgJHtwbGF5ZXJzLmdldCgpLnBsYXllcjEuWH1gIHx8IGAke3BsYXllcnMuZ2V0KCkucGxheWVyMS5PfWApID09PSBgJHtjb21ic1tqXVtpXX1gKSB7XG4gICAgICAgIGNvbnN0IHNjb3JlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzOmZpcnN0LWNoaWxkIC5zY29yZScpO1xuICAgICAgICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnM6Zmlyc3QtY2hpbGQgcCcpO1xuICAgICAgICBjb25zdCBpbmNyZWFzZSA9IEpTT04ucGFyc2Uoc2NvcmUxLnRleHRDb250ZW50KSArIDAuNTtcbiAgICAgICAgc2NvcmUxLnRleHRDb250ZW50ID0gYCR7aW5jcmVhc2V9YDtcbiAgICAgICAgcmV0dXJuIGAke3BsYXllcjEudGV4dENvbnRlbnR9IHdpbnMgdGhpcyByb3VuZCFgO1xuICAgICAgfSBpZiAoKGAke3BsYXllcnMuZ2V0KCkucGxheWVyMi5YfWAgfHwgYCR7cGxheWVycy5nZXQoKS5wbGF5ZXIyLk99YCkgPT09IGAke2NvbWJzW2pdW2ldfWApIHtcbiAgICAgICAgY29uc3Qgc2NvcmUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnM6bGFzdC1jaGlsZCAuc2NvcmUnKTtcbiAgICAgICAgY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzOmxhc3QtY2hpbGQgcCcpO1xuICAgICAgICBjb25zdCBpbmNyZWFzZSA9IEpTT04ucGFyc2Uoc2NvcmUyLnRleHRDb250ZW50KSArIDAuNTtcbiAgICAgICAgc2NvcmUyLnRleHRDb250ZW50ID0gYCR7aW5jcmVhc2V9YDtcbiAgICAgICAgcmV0dXJuIGAke3BsYXllcjIudGV4dENvbnRlbnR9IHdpbnMgdGhpcyByb3VuZCFgO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0pQJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmg0OmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljOWI0O1xyXG4gIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEphcGFuZXNlJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBib2R5O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBib2R5IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmFuaW1hdGlvbiB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGNlbGRzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjZWxkcyB7XHJcbiAgZnJvbSB7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbiNwbGF5ZXJzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNXB4O1xyXG59XHJcblxyXG4jbmlja25hbWUge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgSmFwYW5lc2UnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jb3B0aW9ucy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggNTBweDtcclxufVxyXG5cclxuLmNlbGRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5jZWxkczpob3ZlcixcclxuI2VudGVyLWljb246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNlbGRzOm5vdCg6bnRoLWNoaWxkKDcpLCA6bnRoLWNoaWxkKDgpLCA6bnRoLWNoaWxkKDkpKSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uY2VsZHM6bm90KDpudGgtY2hpbGQoMyksIDpudGgtY2hpbGQoNiksIDpudGgtY2hpbGQoOSkpIHtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnBsYXllci10dXJuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBwbGF5ZXItdHVybjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggIzkzMGQyOTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwbGF5ZXItdHVybiB7XHJcbiAgZnJvbSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDNweCAjOTMwZDI5O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggNXB4ICM5MzBkMjk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuLnBvcC11cCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1heC13aWR0aDogMjgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzZWxlY3Rpb24tY29udGFpbmVyLmhpZGUsXHJcbiNnYW1lYm9hcmQtY29udGFpbmVyLmhpZGUsXHJcbiNwbGF5ZXJzLWNvbnRhaW5lci5oaWRlLFxyXG4jZGl2LXdpbm5lci5oaWRlLFxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2dhbWVib2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTAwcHgpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDEwMHB4KTtcclxufVxyXG5cclxuI3NlbGVjdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4jc2VsZWN0aW9uLWNvbnRhaW5lciBoNDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jcGxheWVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ucGxheWVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuI2Rpdi13aW5uZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMzBweDtcclxuICBhbmltYXRpb24tbmFtZTogcG9wLXVwO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMDg3MDI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jcmVmcmVzaC1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI3JlZnJlc2gtYnV0dG9uOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzliNDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBiZWlnZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwb3AtdXAge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDZDQUE2QztFQUM3QyxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsc0NBQXNDO0VBQ3RDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFO0lBQ0UsK0JBQStCO0lBQy9CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLCtCQUErQjtJQUMvQixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBOzs7OztFQUtFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrSlAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oNDpmaXJzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWM5YjQ7XFxyXFxuICBmb250LWZhbWlseTogJ05vdG8gU2FucyBKYXBhbmVzZScsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGJvZHk7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBib2R5IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYW5pbWF0aW9uIHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjZWxkcztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXHJcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNlbGRzIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBmb250LXNpemU6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVycy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI25pY2tuYW1lIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEphcGFuZXNlJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI29wdGlvbnMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGRzOmhvdmVyLFxcclxcbiNlbnRlci1pY29uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGRzOm5vdCg6bnRoLWNoaWxkKDcpLCA6bnRoLWNoaWxkKDgpLCA6bnRoLWNoaWxkKDkpKSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jZWxkczpub3QoOm50aC1jaGlsZCgzKSwgOm50aC1jaGlsZCg2KSwgOm50aC1jaGlsZCg5KSkge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItdHVybiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBhbmltYXRpb24tbmFtZTogcGxheWVyLXR1cm47XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggM3B4ICM5MzBkMjk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcGxheWVyLXR1cm4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggM3B4ICM5MzBkMjk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggNXB4ICM5MzBkMjk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wb3AtdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1heC13aWR0aDogMjgwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0aW9uLWNvbnRhaW5lci5oaWRlLFxcclxcbiNnYW1lYm9hcmQtY29udGFpbmVyLmhpZGUsXFxyXFxuI3BsYXllcnMtY29udGFpbmVyLmhpZGUsXFxyXFxuI2Rpdi13aW5uZXIuaGlkZSxcXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTAwcHgpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMTAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0aW9uLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3Rpb24tY29udGFpbmVyIGg0OmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVycyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNkaXYtd2lubmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHBvcC11cDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMDg3MDI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI3JlZnJlc2gtYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVmcmVzaC1idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzliNDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJlaWdlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHBvcC11cCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IGRpc3BsYXlHYW1lYm9hcmQgZnJvbSAnLi4vbW9kdWxlcy9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IHsgc2VsZWN0UGxheWVyIH0gZnJvbSAnLi4vbW9kdWxlcy9zZWxlY3RQbGF5ZXIuanMnO1xuaW1wb3J0IHNlbGVjdE9wdGlvbiBmcm9tICcuLi9tb2R1bGVzL3NlbGVjdE9wdGlvbi5qcyc7XG5pbXBvcnQgZGlzcGxheVdpbm5lciBmcm9tICcuLi9tb2R1bGVzL3dpbm5lci5qcyc7XG5pbXBvcnQgeyBwbGF5ZXJzIH0gZnJvbSAnLi4vbW9kdWxlcy9wbGF5ZXJzLmpzJztcbmltcG9ydCBnYW1lIGZyb20gJy4uL21vZHVsZXMvZ2FtZS5qcyc7XG5pbXBvcnQgYWRkUGxheWVyIGZyb20gJy4uL21vZHVsZXMvYWRkUGxheWVyLmpzJztcbmltcG9ydCBoaWRlIGZyb20gJy4uL21vZHVsZXMvaGlkZS5qcyc7XG5pbXBvcnQgcmVmcmVzaCBmcm9tICcuLi9tb2R1bGVzL3JlZnJlc2guanMnO1xuaW1wb3J0IHdlYkljb24gZnJvbSAnLi9hc3NldHMvdGljLXRhYy10b2UucG5nJztcblxuY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbmxpbmsuaHJlZiA9IHdlYkljb247XG5saW5rLnJlbCA9ICdpY29uJztcbmNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuXG5jb25zdCBjaG9vc2VYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3gnKTtcbmNvbnN0IGNob29zZU8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbycpO1xuY29uc3Qgd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpdi13aW5uZXIgaDUnKTtcbmNvbnN0IHdpbm5lckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYtd2lubmVyJyk7XG5jb25zdCBlbnRlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXItaWNvbicpO1xuY29uc3QgaW5wdXROaWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25pY2tuYW1lJyk7XG5jb25zdCBkaXZQbGF5ZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcnMnKTtcbmNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVmcmVzaC1idXR0b24nKTtcblxuZW50ZXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoaW5wdXROaWNrLnZhbHVlICE9PSAnJykge1xuICAgIGFkZFBsYXllcigpO1xuICAgIGlucHV0Tmljay52YWx1ZSA9ICcnO1xuICAgIGlmIChkaXZQbGF5ZXJzLmNoaWxkRWxlbWVudENvdW50ID09PSAyKSB7XG4gICAgICBoaWRlKCk7XG4gICAgICBzZWxlY3RQbGF5ZXIoKTtcbiAgICB9XG4gIH1cbn0pO1xuLy8gRGlzcGxheSB0aGUgZ2FtZWJvYXJkLlxuZGlzcGxheUdhbWVib2FyZCgpO1xuXG4vLyBBZGRzIGxpc3RlbmVycyB0byB0aGUgb3B0aW9uIHNlbGVjdGVkLlxuY2hvb3NlWC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdE9wdGlvbik7XG5jaG9vc2VPLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0T3B0aW9uKTtcbmZ1bmN0aW9uIGluaXRpYWxpemVHYW1lKCkge1xuICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGRzJyk7XG4gIGxldCBwbGF5ZXIxWDsgbGV0IHBsYXllcjFPOyBsZXQgcGxheWVyMlg7IGxldFxuICAgIHBsYXllcjJPO1xuICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBwbGF5ZXIxWCA9IHBsYXllcnMuZ2V0KCkucGxheWVyMS5YLmxlbmd0aDtcbiAgICBwbGF5ZXIxTyA9IHBsYXllcnMuZ2V0KCkucGxheWVyMS5PLmxlbmd0aDtcbiAgICBwbGF5ZXIyWCA9IHBsYXllcnMuZ2V0KCkucGxheWVyMi5YLmxlbmd0aDtcbiAgICBwbGF5ZXIyTyA9IHBsYXllcnMuZ2V0KCkucGxheWVyMi5PLmxlbmd0aDtcbiAgICBpZiAoKChwbGF5ZXIxWCB8fCBwbGF5ZXIxTykgPT09IDMpIHx8ICgocGxheWVyMlggfHwgcGxheWVyMk8pID09PSAzKSkge1xuICAgICAgaWYgKGRpc3BsYXlXaW5uZXIoKSkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgd2lubmVyLnRleHRDb250ZW50ID0gZGlzcGxheVdpbm5lcigpO1xuICAgICAgICB3aW5uZXJEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB3aW5uZXJEaXYuY2xhc3NMaXN0LmFkZCgncG9wLXVwJyk7XG4gICAgICAgIGRpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgocGxheWVyMVggfHwgcGxheWVyMU8pID49IDQgfHwgKHBsYXllcjJYIHx8IHBsYXllcjJPKSA+PSA0KSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIHdpbm5lci50ZXh0Q29udGVudCA9IFwiSXQncyBhIGRyYXchXCI7XG4gICAgICB3aW5uZXJEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgd2lubmVyRGl2LmNsYXNzTGlzdC5hZGQoJ3BvcC11cCcpO1xuICAgICAgZGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWUpKTtcbiAgICB9XG4gIH0sIDEwMCk7XG5cbiAgLyogd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKCF3aW5uZXJEaXYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgd2lubmVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcC11cCcpO1xuICAgIH1cbiAgfSk7ICovXG59XG5pbml0aWFsaXplR2FtZSgpO1xuXG5yZWZyZXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZWZyZXNoKCk7XG4gIGluaXRpYWxpemVHYW1lKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=