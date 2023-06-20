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
  padding-right: 25px;
}

h4:last-child {
  padding-left: 25px;
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
  justify-content: center;
  gap: 5px;
  margin-top: 30px;
}

#nickname {
  outline: none;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid black;
  background: none;
  font-family: 'Noto Sans Japanese', sans-serif;
  width: 33%;
}

#options-container {
  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: 100px;
  border-radius: 10px;
  padding: 10px 25px;
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,yBAAyB;EACzB,6CAA6C;EAC7C,gBAAgB;EAChB,oBAAoB;EACpB,wBAAwB;EACxB,sCAAsC;AACxC;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,sCAAsC;AACxC;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,cAAc;EAChB;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,gBAAgB;EAChB,6CAA6C;EAC7C,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,2BAA2B;EAC3B,wBAAwB;EACxB,sCAAsC;EACtC,+BAA+B;AACjC;;AAEA;EACE;IACE,+BAA+B;IAC/B,mBAAmB;EACrB;;EAEA;IACE,+BAA+B;IAC/B,mBAAmB;EACrB;AACF;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;;;;;EAKE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,sBAAsB;EACtB,sBAAsB;EACtB,sCAAsC;EACtC,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh4:first-child {\r\n  border-right: 1px solid black;\r\n  padding-right: 25px;\r\n}\r\n\r\nh4:last-child {\r\n  padding-left: 25px;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  background-color: #c9c9b4;\r\n  font-family: 'Noto Sans Japanese', sans-serif;\r\n  font-size: 1.2em;\r\n  animation-name: body;\r\n  animation-duration: 0.5s;\r\n  animation-timing-function: ease-in-out;\r\n}\r\n\r\n@keyframes body {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.animation {\r\n  animation-name: celds;\r\n  animation-duration: 0.5s;\r\n  animation-timing-function: ease-in-out;\r\n}\r\n\r\n@keyframes celds {\r\n  from {\r\n    font-size: 0;\r\n  }\r\n\r\n  to {\r\n    font-size: 2em;\r\n  }\r\n}\r\n\r\n#players-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n  margin-top: 30px;\r\n}\r\n\r\n#nickname {\r\n  outline: none;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  border: 1px solid black;\r\n  background: none;\r\n  font-family: 'Noto Sans Japanese', sans-serif;\r\n  width: 33%;\r\n}\r\n\r\n#options-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 1px solid black;\r\n  width: 100px;\r\n  border-radius: 10px;\r\n  padding: 10px 25px;\r\n}\r\n\r\n.celds {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2em;\r\n}\r\n\r\n.celds:hover,\r\n#enter-icon:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.celds:not(:nth-child(7), :nth-child(8), :nth-child(9)) {\r\n  border-bottom: 2px solid black;\r\n}\r\n\r\n.celds:not(:nth-child(3), :nth-child(6), :nth-child(9)) {\r\n  border-right: 2px solid black;\r\n}\r\n\r\n.player-turn {\r\n  background-color: #fdfdfd;\r\n  border: 1px solid black;\r\n  animation-name: player-turn;\r\n  animation-duration: 0.2s;\r\n  animation-timing-function: ease-in-out;\r\n  box-shadow: 0 0 5px 3px #930d29;\r\n}\r\n\r\n@keyframes player-turn {\r\n  from {\r\n    box-shadow: 0 0 5px 3px #930d29;\r\n    transform: scale(0);\r\n  }\r\n\r\n  to {\r\n    box-shadow: 0 0 5px 5px #930d29;\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.pop-up {\r\n  position: fixed;\r\n  z-index: 999;\r\n  width: 50%;\r\n  max-width: 280px;\r\n  background-color: gray;\r\n  text-align: center;\r\n}\r\n\r\n#selection-container.hide,\r\n#gameboard-container.hide,\r\n#players-container.hide,\r\n#div-winner.hide,\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n#gameboard-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 100px);\r\n  grid-template-rows: repeat(3, 100px);\r\n}\r\n\r\n#selection-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 60px;\r\n  gap: 30px;\r\n}\r\n\r\n#selection-container h4:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n#players {\r\n  display: flex;\r\n  gap: 40px;\r\n  margin-top: 40px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.players {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n  padding: 10px 20px;\r\n  border-radius: 20px;\r\n}\r\n\r\n#div-winner {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 30px;\r\n  animation-name: pop-up;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-in-out;\r\n  padding: 20px 30px;\r\n  background-color: #d08702;\r\n  border-radius: 5px;\r\n  border: 1px solid black;\r\n}\r\n\r\n#refresh-button {\r\n  padding: 10px 20px;\r\n  border-radius: 5px;\r\n  background: none;\r\n  border: 1px solid black;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n#refresh-button:hover {\r\n  cursor: pointer;\r\n  background-color: #c9c9b4;\r\n  border: 1px solid beige;\r\n}\r\n\r\n@keyframes pop-up {\r\n  from {\r\n    transform: scale(0);\r\n  }\r\n\r\n  to {\r\n    transform: scale(1);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFNBQVMsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFB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RDtBQUNWO0FBQ1U7QUFDVjtBQUNNO0FBQ0c7O0FBRS9DO0FBQ0EsWUFBWSxxREFBTztBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxpRUFBUztBQUNiO0FBQ0E7QUFDQSxNQUFNLDREQUFJO0FBQ1YsTUFBTSxzRUFBWTtBQUNsQjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWdCOztBQUVoQjtBQUNBLGtDQUFrQyxnRUFBWTtBQUM5QyxrQ0FBa0MsZ0VBQVk7QUFDOUM7QUFDQTtBQUNBLGdCQUFnQixjQUFjLGNBQWM7QUFDNUM7QUFDQTtBQUNBLGVBQWUsd0RBQU87QUFDdEIsZUFBZSx3REFBTztBQUN0QixlQUFlLHdEQUFPO0FBQ3RCLGVBQWUsd0RBQU87QUFDdEI7QUFDQSxVQUFVLDhEQUFhO0FBQ3ZCO0FBQ0EsNkJBQTZCLDhEQUFhO0FBQzFDO0FBQ0E7QUFDQSwrREFBK0Qsd0RBQUk7QUFDbkU7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsd0RBQUk7QUFDakU7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHO0FBQ047QUFDQTs7QUFFQTtBQUNBLEVBQUUsK0RBQU87QUFDVDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9hZGRQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvaGlkZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9wbGF5ZXJzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL3JlZnJlc2guanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvc2VsZWN0T3B0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL3NlbGVjdFBsYXllci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy93aW5uZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUGxheWVyKCkge1xuICAvLyBDcmVhdGUgZWxlbWVudHMuXG4gIGNvbnN0IGRpdlBsYXllcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVycycpO1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgaW5wdXROaWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25pY2tuYW1lJyk7XG5cbiAgLy8gQWRkIGNsYXNzZXNcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BsYXllcnMnKTtcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdzY29yZScpO1xuXG4gIC8vIEFwcGVuZCBlbGVtZW50cy5cbiAgcC50ZXh0Q29udGVudCA9IGlucHV0Tmljay52YWx1ZS50cmltKCk7XG4gIHNwYW4udGV4dENvbnRlbnQgPSAnMCc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4pO1xuICBkaXZQbGF5ZXJzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59IiwiaW1wb3J0IHsgcGxheWVyLCBzZWxlY3RQbGF5ZXIgfSBmcm9tICcuL3NlbGVjdFBsYXllci5qcyc7XHJcbmltcG9ydCB7IHBsYXllcnMgfSBmcm9tICcuL3BsYXllcnMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZShldmVudCkge1xyXG4gIGNvbnN0IGNob29zZSA9IHBsYXllcnMuZ2V0KClbYCR7cGxheWVyfWBdLmNob2ljZTtcclxuICAvLyBJZiB0aGUgZGl2IGlzIG5vdCBlbXB0eSwgcmV0dXJuLlxyXG4gIGlmIChldmVudC50YXJnZXQudGV4dENvbnRlbnQpIHJldHVybjtcclxuICAvLyBJZiBpdCdzIGVtcHR5IHRoZW4gYXNzaWduIGl0IHRoZSBzZWxlY3RlZCBjaG9pY2UuXHJcbiAgZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID0gY2hvb3NlO1xyXG4gIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhbmltYXRpb24nKTtcclxuICAvLyBUbyB0aGUgc2VsZWN0ZWQgcGxheWVyIGFuZCB0aGUgc2VsZWN0ZWQgY2hvaWNlLCBhZGQgdGhlIHBvc2l0aW9uIGZvIHRoZSBkaXYuXHJcbiAgcGxheWVycy5nZXQoKVtgJHtwbGF5ZXJ9YF1bYCR7Y2hvb3NlfWBdLnB1c2goSlNPTi5wYXJzZShldmVudC50YXJnZXQuaWQpKTtcclxuICBzZWxlY3RQbGF5ZXIoKTtcclxufSIsImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlHYW1lYm9hcmQoKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDM7IGogKz0gMSkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2VsZHMnKTtcbiAgICAgIGRpdi5pZCA9IGBbJHtpfSwgJHtqfV1gO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaWRlKCkge1xuICBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gIGNvbnN0IHBsYXllcnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVycy1jb250YWluZXInKTtcbiAgY29uc3Qgc2VsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGlvbi1jb250YWluZXInKTtcbiAgY29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1jb250YWluZXInKTtcblxuICAvLyBIaWRlIHRoZSBmaXJzdCBlbGVtZW50c1xuICBoMS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIHBsYXllcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gIC8vIFNob3cgdGhlIGdhbWVcbiAgc2VsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgZ2FtZUJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbn0iLCJsZXQgUGxheWVycyA9IHtcbiAgcGxheWVyMToge1xuICAgIFg6IFtdLFxuICAgIE86IFtdLFxuICAgIGNob2ljZTogJycsXG4gIH0sXG4gIHBsYXllcjI6IHtcbiAgICBYOiBbXSxcbiAgICBPOiBbXSxcbiAgICBjaG9pY2U6ICcnLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHBsYXllcnMgPSB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUGxheWVycztcbiAgfSxcbiAgc2V0KG5ld1BsYXllcnMpIHtcbiAgICBQbGF5ZXJzID0gbmV3UGxheWVycztcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBwbGF5ZXJzIH0gZnJvbSAnLi9wbGF5ZXJzLmpzJztcclxuaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZnJlc2goKSB7XHJcbiAgY29uc3QgbmV3UGxheWVycyA9IHtcclxuICAgIHBsYXllcjE6IHtcclxuICAgICAgWDogW10sXHJcbiAgICAgIE86IFtdLFxyXG4gICAgICBjaG9pY2U6IHBsYXllcnMuZ2V0KCkucGxheWVyMS5jaG9pY2UsXHJcbiAgICB9LFxyXG4gICAgcGxheWVyMjoge1xyXG4gICAgICBYOiBbXSxcclxuICAgICAgTzogW10sXHJcbiAgICAgIGNob2ljZTogcGxheWVycy5nZXQoKS5wbGF5ZXIyLmNob2ljZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBwbGF5ZXJzLnNldChuZXdQbGF5ZXJzKTtcclxuICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGRzJyk7XHJcbiAgY29uc3QgZGl2V2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpdi13aW5uZXInKTtcclxuICBkaXZzLmZvckVhY2goKGRpdikgPT4ge1xyXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZSk7XHJcbiAgICBkaXYudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRpb24nKTtcclxuICB9KTtcclxuICBkaXZXaW5uZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG59XHJcbiIsImltcG9ydCB7IHBsYXllcnMgfSBmcm9tICcuL3BsYXllcnMuanMnO1xuaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VsZWN0T3B0aW9uKGV2ZW50KSB7XG4gIGNvbnN0IHNlbGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0aW9uLWNvbnRhaW5lcicpO1xuICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAneCcpIHtcbiAgICBwbGF5ZXJzLmdldCgpLnBsYXllcjEuY2hvaWNlID0gJ1gnO1xuICAgIHBsYXllcnMuZ2V0KCkucGxheWVyMi5jaG9pY2UgPSAnTyc7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVycy5nZXQoKS5wbGF5ZXIxLmNob2ljZSA9ICdPJztcbiAgICBwbGF5ZXJzLmdldCgpLnBsYXllcjIuY2hvaWNlID0gJ1gnO1xuICB9XG4gIHNlbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAvLyBTZWxlY3QgdGhlIGNyZWF0ZWQgZGl2cy5cbiAgY29uc3QgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxkcycpO1xuICAvLyBUbyBlYWNoIGRpdiBhc3NpZ24gdGhlIHNlbGVjdGVkIGNob2ljZS5cbiAgZGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWUpKTtcbn1cbiIsImxldCBwbGF5ZXIgPSAnJztcbmZ1bmN0aW9uIHNlbGVjdFBsYXllcigpIHtcbiAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzOmZpcnN0LWNoaWxkJyk7XG4gIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyczpsYXN0LWNoaWxkJyk7XG4gIGlmICghcGxheWVyMS5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXllci10dXJuJykgJiYgIXBsYXllcjIuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5ZXItdHVybicpKSB7XG4gICAgcGxheWVyID0gJ3BsYXllcjEnO1xuICAgIHBsYXllcjEuY2xhc3NMaXN0LmFkZCgncGxheWVyLXR1cm4nKTtcbiAgfSBlbHNlIGlmIChwbGF5ZXIxLmNsYXNzTGlzdC5jb250YWlucygncGxheWVyLXR1cm4nKSkge1xuICAgIHBsYXllciA9ICdwbGF5ZXIyJztcbiAgICBwbGF5ZXIxLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllci10dXJuJyk7XG4gICAgcGxheWVyMi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHVybicpO1xuICB9IGVsc2Uge1xuICAgIHBsYXllciA9ICdwbGF5ZXIxJztcbiAgICBwbGF5ZXIyLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllci10dXJuJyk7XG4gICAgcGxheWVyMS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHVybicpO1xuICB9XG59XG5cbmV4cG9ydCB7IHBsYXllciwgc2VsZWN0UGxheWVyIH07IiwiaW1wb3J0IHsgcGxheWVycyB9IGZyb20gJy4vcGxheWVycy5qcyc7XG5cbi8vIEZ1bmN0aW9uIHRvIGdlbmVyYXRlIGNvbWJpbmF0aW9ucyB3aXRob3V0IHJlcGV0aXRpb24uXG5mdW5jdGlvbiBjb21iaW5hdGlvbnNXaXRob3V0UmVwZXRpdGlvbihhcnIpIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgLy8gRnVuY2nDs24gYXV4aWxpYXIgcmVjdXJzaXZhIHBhcmEgZ2VuZXJhciBsYXMgY29tYmluYWNpb25lcyBzaW4gcmVwZXRpY2nDs25cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDb21iaW5hdGlvbnMoY3VycmVudCwgcmVtYWluaW5nLCBsZXZlbCkge1xuICAgIGlmIChsZXZlbCA9PT0gYXJyLmxlbmd0aCkge1xuICAgICAgcmVzdWx0LnB1c2goY3VycmVudC5zbGljZSgpKTsgLy8gQWdyZWdhciB1bmEgY29waWEgZGUgbGEgY29tYmluYWNpw7NuIGFjdHVhbCBhbCByZXN1bHRhZG9cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50U2V0ID0gbmV3IFNldChjdXJyZW50KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtYWluaW5nLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuZXh0ID0gY3VycmVudC5jb25jYXQoW3JlbWFpbmluZ1tpXV0pO1xuXG4gICAgICAvLyBWZXJpZmljYXIgc2kgZWwgZWxlbWVudG8geWEgaGEgc2lkbyB1dGlsaXphZG8gZW4gY29tYmluYWNpb25lcyBhbnRlcmlvcmVzXG4gICAgICBpZiAoIWN1cnJlbnRTZXQuaGFzKHJlbWFpbmluZ1tpXSkpIHtcbiAgICAgICAgZ2VuZXJhdGVDb21iaW5hdGlvbnMobmV4dCwgcmVtYWluaW5nLCBsZXZlbCArIDEpOyAvLyBMbGFtYWRhIHJlY3Vyc2l2YVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlQ29tYmluYXRpb25zKFtdLCBhcnIsIDApO1xuICByZXR1cm4gcmVzdWx0O1xufVxuY29uc3QgY29tYjEgPSBjb21iaW5hdGlvbnNXaXRob3V0UmVwZXRpdGlvbihbWzEsIDFdLCBbMSwgMl0sIFsxLCAzXV0pOy8vIEZpcnN0IHJvdy5cbmNvbnN0IGNvbWI0ID0gY29tYmluYXRpb25zV2l0aG91dFJlcGV0aXRpb24oW1syLCAxXSwgWzIsIDJdLCBbMiwgM11dKTsvLyBTZWNvbmQgcm93LlxuY29uc3QgY29tYjMgPSBjb21iaW5hdGlvbnNXaXRob3V0UmVwZXRpdGlvbihbWzMsIDFdLCBbMywgMl0sIFszLCAzXV0pOy8vIFRoaXJkIHJvdy5cbmNvbnN0IGNvbWIyID0gY29tYmluYXRpb25zV2l0aG91dFJlcGV0aXRpb24oW1sxLCAxXSwgWzIsIDJdLCBbMywgM11dKTsvLyBGaXJzdCBkaWFnb25hbC5cbmNvbnN0IGNvbWI4ID0gY29tYmluYXRpb25zV2l0aG91dFJlcGV0aXRpb24oW1sxLCAzXSwgWzIsIDJdLCBbMywgMV1dKTsvLyBTZWNvbmQgZGlhZ29uYWwuXG5jb25zdCBjb21iNSA9IGNvbWJpbmF0aW9uc1dpdGhvdXRSZXBldGl0aW9uKFtbMSwgMV0sIFsyLCAxXSwgWzMsIDFdXSk7Ly8gRmlyc3QgY29sdW1uLlxuY29uc3QgY29tYjYgPSBjb21iaW5hdGlvbnNXaXRob3V0UmVwZXRpdGlvbihbWzEsIDJdLCBbMiwgMl0sIFszLCAyXV0pOy8vIFNlY29uZCBjb2x1bW4uXG5jb25zdCBjb21iNyA9IGNvbWJpbmF0aW9uc1dpdGhvdXRSZXBldGl0aW9uKFtbMSwgM10sIFsyLCAzXSwgWzMsIDNdXSk7Ly8gVGhpcmQgY29sdW1uLlxuY29uc3QgY29tYnMgPSBbY29tYjEsIGNvbWIyLCBjb21iMywgY29tYjQsIGNvbWI1LCBjb21iNiwgY29tYjcsIGNvbWI4XTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVdpbm5lcigpIHtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBjb21icy5sZW5ndGg7IGogKz0gMSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tYnNbal0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICgoYCR7cGxheWVycy5nZXQoKS5wbGF5ZXIxLlh9YCB8fCBgJHtwbGF5ZXJzLmdldCgpLnBsYXllcjEuT31gKSA9PT0gYCR7Y29tYnNbal1baV19YCkge1xuICAgICAgICBjb25zdCBzY29yZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyczpmaXJzdC1jaGlsZCAuc2NvcmUnKTtcbiAgICAgICAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzOmZpcnN0LWNoaWxkIHAnKTtcbiAgICAgICAgY29uc3QgaW5jcmVhc2UgPSBKU09OLnBhcnNlKHNjb3JlMS50ZXh0Q29udGVudCkgKyAwLjU7XG4gICAgICAgIHNjb3JlMS50ZXh0Q29udGVudCA9IGAke2luY3JlYXNlfWA7XG4gICAgICAgIHJldHVybiBgJHtwbGF5ZXIxLnRleHRDb250ZW50fSB3aW5zIHRoaXMgcm91bmQhYDtcbiAgICAgIH0gaWYgKChgJHtwbGF5ZXJzLmdldCgpLnBsYXllcjIuWH1gIHx8IGAke3BsYXllcnMuZ2V0KCkucGxheWVyMi5PfWApID09PSBgJHtjb21ic1tqXVtpXX1gKSB7XG4gICAgICAgIGNvbnN0IHNjb3JlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzOmxhc3QtY2hpbGQgLnNjb3JlJyk7XG4gICAgICAgIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyczpsYXN0LWNoaWxkIHAnKTtcbiAgICAgICAgY29uc3QgaW5jcmVhc2UgPSBKU09OLnBhcnNlKHNjb3JlMi50ZXh0Q29udGVudCkgKyAwLjU7XG4gICAgICAgIHNjb3JlMi50ZXh0Q29udGVudCA9IGAke2luY3JlYXNlfWA7XG4gICAgICAgIHJldHVybiBgJHtwbGF5ZXIyLnRleHRDb250ZW50fSB3aW5zIHRoaXMgcm91bmQhYDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytKUCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5oNDpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuaDQ6bGFzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljOWI0O1xyXG4gIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEphcGFuZXNlJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBib2R5O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBib2R5IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmFuaW1hdGlvbiB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGNlbGRzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjZWxkcyB7XHJcbiAgZnJvbSB7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbiNwbGF5ZXJzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbiNuaWNrbmFtZSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBmb250LWZhbWlseTogJ05vdG8gU2FucyBKYXBhbmVzZScsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDMzJTtcclxufVxyXG5cclxuI29wdGlvbnMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcclxufVxyXG5cclxuLmNlbGRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5jZWxkczpob3ZlcixcclxuI2VudGVyLWljb246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNlbGRzOm5vdCg6bnRoLWNoaWxkKDcpLCA6bnRoLWNoaWxkKDgpLCA6bnRoLWNoaWxkKDkpKSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uY2VsZHM6bm90KDpudGgtY2hpbGQoMyksIDpudGgtY2hpbGQoNiksIDpudGgtY2hpbGQoOSkpIHtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnBsYXllci10dXJuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBwbGF5ZXItdHVybjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggIzkzMGQyOTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwbGF5ZXItdHVybiB7XHJcbiAgZnJvbSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDNweCAjOTMwZDI5O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggNXB4ICM5MzBkMjk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuLnBvcC11cCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1heC13aWR0aDogMjgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzZWxlY3Rpb24tY29udGFpbmVyLmhpZGUsXHJcbiNnYW1lYm9hcmQtY29udGFpbmVyLmhpZGUsXHJcbiNwbGF5ZXJzLWNvbnRhaW5lci5oaWRlLFxyXG4jZGl2LXdpbm5lci5oaWRlLFxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2dhbWVib2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTAwcHgpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDEwMHB4KTtcclxufVxyXG5cclxuI3NlbGVjdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4jc2VsZWN0aW9uLWNvbnRhaW5lciBoNDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jcGxheWVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ucGxheWVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuI2Rpdi13aW5uZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMzBweDtcclxuICBhbmltYXRpb24tbmFtZTogcG9wLXVwO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMDg3MDI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jcmVmcmVzaC1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI3JlZnJlc2gtYnV0dG9uOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzliNDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBiZWlnZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwb3AtdXAge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDZDQUE2QztFQUM3QyxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLDZDQUE2QztFQUM3QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixzQ0FBc0M7RUFDdEMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0U7SUFDRSwrQkFBK0I7SUFDL0IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsK0JBQStCO0lBQy9CLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7O0VBS0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytKUCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmg0OmZpcnN0LWNoaWxkIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuaDQ6bGFzdC1jaGlsZCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWM5YjQ7XFxyXFxuICBmb250LWZhbWlseTogJ05vdG8gU2FucyBKYXBhbmVzZScsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGJvZHk7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBib2R5IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYW5pbWF0aW9uIHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjZWxkcztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXHJcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNlbGRzIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBmb250LXNpemU6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVycy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI25pY2tuYW1lIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEphcGFuZXNlJywgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiAzMyU7XFxyXFxufVxcclxcblxcclxcbiNvcHRpb25zLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxkcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5jZWxkczpob3ZlcixcXHJcXG4jZW50ZXItaWNvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jZWxkczpub3QoOm50aC1jaGlsZCg3KSwgOm50aC1jaGlsZCg4KSwgOm50aC1jaGlsZCg5KSkge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsZHM6bm90KDpudGgtY2hpbGQoMyksIDpudGgtY2hpbGQoNiksIDpudGgtY2hpbGQoOSkpIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLXR1cm4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHBsYXllci10dXJuO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDNweCAjOTMwZDI5O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHBsYXllci10dXJuIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDNweCAjOTMwZDI5O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDVweCAjOTMwZDI5O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXgtd2lkdGg6IDI4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGlvbi1jb250YWluZXIuaGlkZSxcXHJcXG4jZ2FtZWJvYXJkLWNvbnRhaW5lci5oaWRlLFxcclxcbiNwbGF5ZXJzLWNvbnRhaW5lci5oaWRlLFxcclxcbiNkaXYtd2lubmVyLmhpZGUsXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWVib2FyZC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDEwMHB4KTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDEwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGlvbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0aW9uLWNvbnRhaW5lciBoNDpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXJzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGl2LXdpbm5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBwb3AtdXA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDA4NzAyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoLWJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI3JlZnJlc2gtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWM5YjQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBiZWlnZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBwb3AtdXAge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBkaXNwbGF5R2FtZWJvYXJkIGZyb20gJy4uL21vZHVsZXMvZ2FtZWJvYXJkLmpzJztcbmltcG9ydCB7IHNlbGVjdFBsYXllciB9IGZyb20gJy4uL21vZHVsZXMvc2VsZWN0UGxheWVyLmpzJztcbmltcG9ydCBzZWxlY3RPcHRpb24gZnJvbSAnLi4vbW9kdWxlcy9zZWxlY3RPcHRpb24uanMnO1xuaW1wb3J0IGRpc3BsYXlXaW5uZXIgZnJvbSAnLi4vbW9kdWxlcy93aW5uZXIuanMnO1xuaW1wb3J0IHsgcGxheWVycyB9IGZyb20gJy4uL21vZHVsZXMvcGxheWVycy5qcyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuLi9tb2R1bGVzL2dhbWUuanMnO1xuaW1wb3J0IGFkZFBsYXllciBmcm9tICcuLi9tb2R1bGVzL2FkZFBsYXllci5qcyc7XG5pbXBvcnQgaGlkZSBmcm9tICcuLi9tb2R1bGVzL2hpZGUuanMnO1xuaW1wb3J0IHJlZnJlc2ggZnJvbSAnLi4vbW9kdWxlcy9yZWZyZXNoLmpzJztcbmltcG9ydCB3ZWJJY29uIGZyb20gJy4vYXNzZXRzL3RpYy10YWMtdG9lLnBuZyc7XG5cbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5saW5rLmhyZWYgPSB3ZWJJY29uO1xubGluay5yZWwgPSAnaWNvbic7XG5jb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcblxuY29uc3QgY2hvb3NlWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd4Jyk7XG5jb25zdCBjaG9vc2VPID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ28nKTtcbmNvbnN0IHdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXYtd2lubmVyIGg1Jyk7XG5jb25zdCB3aW5uZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LXdpbm5lcicpO1xuY29uc3QgZW50ZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyLWljb24nKTtcbmNvbnN0IGlucHV0TmljayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduaWNrbmFtZScpO1xuY29uc3QgZGl2UGxheWVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJzJyk7XG5jb25zdCByZWZyZXNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZnJlc2gtYnV0dG9uJyk7XG5cbmVudGVySWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKGlucHV0Tmljay52YWx1ZSAhPT0gJycpIHtcbiAgICBhZGRQbGF5ZXIoKTtcbiAgICBpbnB1dE5pY2sudmFsdWUgPSAnJztcbiAgICBpZiAoZGl2UGxheWVycy5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMikge1xuICAgICAgaGlkZSgpO1xuICAgICAgc2VsZWN0UGxheWVyKCk7XG4gICAgfVxuICB9XG59KTtcbi8vIERpc3BsYXkgdGhlIGdhbWVib2FyZC5cbmRpc3BsYXlHYW1lYm9hcmQoKTtcblxuLy8gQWRkcyBsaXN0ZW5lcnMgdG8gdGhlIG9wdGlvbiBzZWxlY3RlZC5cbmNob29zZVguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RPcHRpb24pO1xuY2hvb3NlTy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdE9wdGlvbik7XG5mdW5jdGlvbiBpbml0aWFsaXplR2FtZSgpIHtcbiAgY29uc3QgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxkcycpO1xuICBsZXQgcGxheWVyMVg7IGxldCBwbGF5ZXIxTzsgbGV0IHBsYXllcjJYOyBsZXRcbiAgICBwbGF5ZXIyTztcbiAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgcGxheWVyMVggPSBwbGF5ZXJzLmdldCgpLnBsYXllcjEuWC5sZW5ndGg7XG4gICAgcGxheWVyMU8gPSBwbGF5ZXJzLmdldCgpLnBsYXllcjEuTy5sZW5ndGg7XG4gICAgcGxheWVyMlggPSBwbGF5ZXJzLmdldCgpLnBsYXllcjIuWC5sZW5ndGg7XG4gICAgcGxheWVyMk8gPSBwbGF5ZXJzLmdldCgpLnBsYXllcjIuTy5sZW5ndGg7XG4gICAgaWYgKCgocGxheWVyMVggfHwgcGxheWVyMU8pID09PSAzKSB8fCAoKHBsYXllcjJYIHx8IHBsYXllcjJPKSA9PT0gMykpIHtcbiAgICAgIGlmIChkaXNwbGF5V2lubmVyKCkpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIHdpbm5lci50ZXh0Q29udGVudCA9IGRpc3BsYXlXaW5uZXIoKTtcbiAgICAgICAgd2lubmVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgd2lubmVyRGl2LmNsYXNzTGlzdC5hZGQoJ3BvcC11cCcpO1xuICAgICAgICBkaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKHBsYXllcjFYIHx8IHBsYXllcjFPKSA+PSA0IHx8IChwbGF5ZXIyWCB8fCBwbGF5ZXIyTykgPj0gNCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBcIkl0J3MgYSBkcmF3IVwiO1xuICAgICAgd2lubmVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgIHdpbm5lckRpdi5jbGFzc0xpc3QuYWRkKCdwb3AtdXAnKTtcbiAgICAgIGRpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lKSk7XG4gICAgfVxuICB9LCAxMDApO1xuXG4gIC8qIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmICghd2lubmVyRGl2LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHdpbm5lckRpdi5jbGFzc0xpc3QucmVtb3ZlKCdwb3AtdXAnKTtcbiAgICB9XG4gIH0pOyAqL1xufVxuaW5pdGlhbGl6ZUdhbWUoKTtcblxucmVmcmVzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVmcmVzaCgpO1xuICBpbml0aWFsaXplR2FtZSgpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9