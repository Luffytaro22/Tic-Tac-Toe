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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.celds {
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.player-turn {
  background-color: aqua;
}

.pop-up {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 30%;
  width: 50%;
  background-color: gray;
  text-align: center;
}

#selection-container.hide,
#gameboard-container.hide,
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
  justify-content: center;
  gap: 20px;
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,QAAQ;EACR,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB","sourcesContent":["body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.celds {\r\n  border: 1px solid black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.player-turn {\r\n  background-color: aqua;\r\n}\r\n\r\n.pop-up {\r\n  position: fixed;\r\n  z-index: 999;\r\n  top: 50%;\r\n  left: 30%;\r\n  width: 50%;\r\n  background-color: gray;\r\n  text-align: center;\r\n}\r\n\r\n#selection-container.hide,\r\n#gameboard-container.hide,\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n#gameboard-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 100px);\r\n  grid-template-rows: repeat(3, 100px);\r\n}\r\n\r\n#selection-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n\r\n#selection-container h4:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n#players {\r\n  display: flex;\r\n  gap: 40px;\r\n  margin-top: 40px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.players {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n  padding: 10px 20px;\r\n  border-radius: 20px;\r\n}\r\n"],"sourceRoot":""}]);
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

  window.addEventListener('click', (event) => {
    if (!winnerDiv.contains(event.target)) {
      winnerDiv.classList.remove('pop-up');
    }
  });
}
initializeGame();

refreshButton.addEventListener('click', () => {
  (0,_modules_refresh_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
  initializeGame();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7QUFDbkU7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsd0RBQUk7QUFDakU7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLCtEQUFPO0FBQ1Q7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvYWRkUGxheWVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL2hpZGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9yZWZyZXNoLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL3NlbGVjdE9wdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9zZWxlY3RQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvd2lubmVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFBsYXllcigpIHtcbiAgLy8gQ3JlYXRlIGVsZW1lbnRzLlxuICBjb25zdCBkaXZQbGF5ZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcnMnKTtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGlucHV0TmljayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduaWNrbmFtZScpO1xuXG4gIC8vIEFkZCBjbGFzc2VzXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJzJyk7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnc2NvcmUnKTtcblxuICAvLyBBcHBlbmQgZWxlbWVudHMuXG4gIHAudGV4dENvbnRlbnQgPSBpbnB1dE5pY2sudmFsdWUudHJpbSgpO1xuICBzcGFuLnRleHRDb250ZW50ID0gJzAnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuKTtcbiAgZGl2UGxheWVycy5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufSIsImltcG9ydCB7IHBsYXllciwgc2VsZWN0UGxheWVyIH0gZnJvbSAnLi9zZWxlY3RQbGF5ZXIuanMnO1xuaW1wb3J0IHsgcGxheWVycyB9IGZyb20gJy4vcGxheWVycy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWUoZXZlbnQpIHtcbiAgY29uc3QgY2hvb3NlID0gcGxheWVycy5nZXQoKVtgJHtwbGF5ZXJ9YF0uY2hvaWNlO1xuICAvLyBJZiB0aGUgZGl2IGlzIG5vdCBlbXB0eSwgcmV0dXJuLlxuICBpZiAoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KSByZXR1cm47XG4gIC8vIElmIGl0J3MgZW1wdHkgdGhlbiBhc3NpZ24gaXQgdGhlIHNlbGVjdGVkIGNob2ljZS5cbiAgZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID0gY2hvb3NlO1xuICAvLyBUbyB0aGUgc2VsZWN0ZWQgcGxheWVyIGFuZCB0aGUgc2VsZWN0ZWQgY2hvaWNlLCBhZGQgdGhlIHBvc2l0aW9uIGZvIHRoZSBkaXYuXG4gIHBsYXllcnMuZ2V0KClbYCR7cGxheWVyfWBdW2Ake2Nob29zZX1gXS5wdXNoKEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LmlkKSk7XG4gIHNlbGVjdFBsYXllcigpO1xufSIsImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlHYW1lYm9hcmQoKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDM7IGogKz0gMSkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2VsZHMnKTtcbiAgICAgIGRpdi5pZCA9IGBbJHtpfSwgJHtqfV1gO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaWRlKCkge1xuICBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gIGNvbnN0IHBsYXllcnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVycy1jb250YWluZXInKTtcbiAgY29uc3Qgc2VsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGlvbi1jb250YWluZXInKTtcbiAgY29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1jb250YWluZXInKTtcblxuICAvLyBIaWRlIHRoZSBmaXJzdCBlbGVtZW50c1xuICBoMS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIHBsYXllcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gIC8vIFNob3cgdGhlIGdhbWVcbiAgc2VsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgZ2FtZUJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbn0iLCJsZXQgUGxheWVycyA9IHtcbiAgcGxheWVyMToge1xuICAgIFg6IFtdLFxuICAgIE86IFtdLFxuICAgIGNob2ljZTogJycsXG4gIH0sXG4gIHBsYXllcjI6IHtcbiAgICBYOiBbXSxcbiAgICBPOiBbXSxcbiAgICBjaG9pY2U6ICcnLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHBsYXllcnMgPSB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUGxheWVycztcbiAgfSxcbiAgc2V0KG5ld1BsYXllcnMpIHtcbiAgICBQbGF5ZXJzID0gbmV3UGxheWVycztcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBwbGF5ZXJzIH0gZnJvbSAnLi9wbGF5ZXJzLmpzJztcbmltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gIGNvbnN0IG5ld1BsYXllcnMgPSB7XG4gICAgcGxheWVyMToge1xuICAgICAgWDogW10sXG4gICAgICBPOiBbXSxcbiAgICAgIGNob2ljZTogcGxheWVycy5nZXQoKS5wbGF5ZXIxLmNob2ljZSxcbiAgICB9LFxuICAgIHBsYXllcjI6IHtcbiAgICAgIFg6IFtdLFxuICAgICAgTzogW10sXG4gICAgICBjaG9pY2U6IHBsYXllcnMuZ2V0KCkucGxheWVyMi5jaG9pY2UsXG4gICAgfSxcbiAgfTtcbiAgcGxheWVycy5zZXQobmV3UGxheWVycyk7XG4gIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsZHMnKTtcbiAgY29uc3QgZGl2V2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpdi13aW5uZXInKTtcbiAgZGl2cy5mb3JFYWNoKChkaXYpID0+IHtcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSAnJztcbiAgfSk7XG4gIGRpdldpbm5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG59XG4iLCJpbXBvcnQgeyBwbGF5ZXJzIH0gZnJvbSAnLi9wbGF5ZXJzLmpzJztcbmltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbGVjdE9wdGlvbihldmVudCkge1xuICBjb25zdCBzZWxlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGlvbi1jb250YWluZXInKTtcbiAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ3gnKSB7XG4gICAgcGxheWVycy5nZXQoKS5wbGF5ZXIxLmNob2ljZSA9ICdYJztcbiAgICBwbGF5ZXJzLmdldCgpLnBsYXllcjIuY2hvaWNlID0gJ08nO1xuICB9IGVsc2Uge1xuICAgIHBsYXllcnMuZ2V0KCkucGxheWVyMS5jaG9pY2UgPSAnTyc7XG4gICAgcGxheWVycy5nZXQoKS5wbGF5ZXIyLmNob2ljZSA9ICdYJztcbiAgfVxuICBzZWxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgLy8gU2VsZWN0IHRoZSBjcmVhdGVkIGRpdnMuXG4gIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsZHMnKTtcbiAgLy8gVG8gZWFjaCBkaXYgYXNzaWduIHRoZSBzZWxlY3RlZCBjaG9pY2UuXG4gIGRpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lKSk7XG59XG4iLCJsZXQgcGxheWVyID0gJyc7XG5mdW5jdGlvbiBzZWxlY3RQbGF5ZXIoKSB7XG4gIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyczpmaXJzdC1jaGlsZCcpO1xuICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnM6bGFzdC1jaGlsZCcpO1xuICBpZiAoIXBsYXllcjEuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5ZXItdHVybicpICYmICFwbGF5ZXIyLmNsYXNzTGlzdC5jb250YWlucygncGxheWVyLXR1cm4nKSkge1xuICAgIHBsYXllciA9ICdwbGF5ZXIxJztcbiAgICBwbGF5ZXIxLmNsYXNzTGlzdC5hZGQoJ3BsYXllci10dXJuJyk7XG4gIH0gZWxzZSBpZiAocGxheWVyMS5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXllci10dXJuJykpIHtcbiAgICBwbGF5ZXIgPSAncGxheWVyMic7XG4gICAgcGxheWVyMS5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXItdHVybicpO1xuICAgIHBsYXllcjIuY2xhc3NMaXN0LmFkZCgncGxheWVyLXR1cm4nKTtcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXIgPSAncGxheWVyMSc7XG4gICAgcGxheWVyMi5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXItdHVybicpO1xuICAgIHBsYXllcjEuY2xhc3NMaXN0LmFkZCgncGxheWVyLXR1cm4nKTtcbiAgfVxufVxuXG5leHBvcnQgeyBwbGF5ZXIsIHNlbGVjdFBsYXllciB9OyIsImltcG9ydCB7IHBsYXllcnMgfSBmcm9tICcuL3BsYXllcnMuanMnO1xuXG4vLyBGdW5jdGlvbiB0byBnZW5lcmF0ZSBjb21iaW5hdGlvbnMgd2l0aG91dCByZXBldGl0aW9uLlxuZnVuY3Rpb24gY29tYmluYXRpb25zV2l0aG91dFJlcGV0aXRpb24oYXJyKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gIC8vIEZ1bmNpw7NuIGF1eGlsaWFyIHJlY3Vyc2l2YSBwYXJhIGdlbmVyYXIgbGFzIGNvbWJpbmFjaW9uZXMgc2luIHJlcGV0aWNpw7NuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ29tYmluYXRpb25zKGN1cnJlbnQsIHJlbWFpbmluZywgbGV2ZWwpIHtcbiAgICBpZiAobGV2ZWwgPT09IGFyci5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQuc2xpY2UoKSk7IC8vIEFncmVnYXIgdW5hIGNvcGlhIGRlIGxhIGNvbWJpbmFjacOzbiBhY3R1YWwgYWwgcmVzdWx0YWRvXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFNldCA9IG5ldyBTZXQoY3VycmVudCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbWFpbmluZy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmV4dCA9IGN1cnJlbnQuY29uY2F0KFtyZW1haW5pbmdbaV1dKTtcblxuICAgICAgLy8gVmVyaWZpY2FyIHNpIGVsIGVsZW1lbnRvIHlhIGhhIHNpZG8gdXRpbGl6YWRvIGVuIGNvbWJpbmFjaW9uZXMgYW50ZXJpb3Jlc1xuICAgICAgaWYgKCFjdXJyZW50U2V0LmhhcyhyZW1haW5pbmdbaV0pKSB7XG4gICAgICAgIGdlbmVyYXRlQ29tYmluYXRpb25zKG5leHQsIHJlbWFpbmluZywgbGV2ZWwgKyAxKTsgLy8gTGxhbWFkYSByZWN1cnNpdmFcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUNvbWJpbmF0aW9ucyhbXSwgYXJyLCAwKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmNvbnN0IGNvbWIxID0gY29tYmluYXRpb25zV2l0aG91dFJlcGV0aXRpb24oW1sxLCAxXSwgWzEsIDJdLCBbMSwgM11dKTsvLyBGaXJzdCByb3cuXG5jb25zdCBjb21iNCA9IGNvbWJpbmF0aW9uc1dpdGhvdXRSZXBldGl0aW9uKFtbMiwgMV0sIFsyLCAyXSwgWzIsIDNdXSk7Ly8gU2Vjb25kIHJvdy5cbmNvbnN0IGNvbWIzID0gY29tYmluYXRpb25zV2l0aG91dFJlcGV0aXRpb24oW1szLCAxXSwgWzMsIDJdLCBbMywgM11dKTsvLyBUaGlyZCByb3cuXG5jb25zdCBjb21iMiA9IGNvbWJpbmF0aW9uc1dpdGhvdXRSZXBldGl0aW9uKFtbMSwgMV0sIFsyLCAyXSwgWzMsIDNdXSk7Ly8gRmlyc3QgZGlhZ29uYWwuXG5jb25zdCBjb21iOCA9IGNvbWJpbmF0aW9uc1dpdGhvdXRSZXBldGl0aW9uKFtbMSwgM10sIFsyLCAyXSwgWzMsIDFdXSk7Ly8gU2Vjb25kIGRpYWdvbmFsLlxuY29uc3QgY29tYjUgPSBjb21iaW5hdGlvbnNXaXRob3V0UmVwZXRpdGlvbihbWzEsIDFdLCBbMiwgMV0sIFszLCAxXV0pOy8vIEZpcnN0IGNvbHVtbi5cbmNvbnN0IGNvbWI2ID0gY29tYmluYXRpb25zV2l0aG91dFJlcGV0aXRpb24oW1sxLCAyXSwgWzIsIDJdLCBbMywgMl1dKTsvLyBTZWNvbmQgY29sdW1uLlxuY29uc3QgY29tYjcgPSBjb21iaW5hdGlvbnNXaXRob3V0UmVwZXRpdGlvbihbWzEsIDNdLCBbMiwgM10sIFszLCAzXV0pOy8vIFRoaXJkIGNvbHVtbi5cbmNvbnN0IGNvbWJzID0gW2NvbWIxLCBjb21iMiwgY29tYjMsIGNvbWI0LCBjb21iNSwgY29tYjYsIGNvbWI3LCBjb21iOF07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlXaW5uZXIoKSB7XG4gIGZvciAobGV0IGogPSAwOyBqIDwgY29tYnMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbWJzW2pdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoKGAke3BsYXllcnMuZ2V0KCkucGxheWVyMS5YfWAgfHwgYCR7cGxheWVycy5nZXQoKS5wbGF5ZXIxLk99YCkgPT09IGAke2NvbWJzW2pdW2ldfWApIHtcbiAgICAgICAgY29uc3Qgc2NvcmUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnM6Zmlyc3QtY2hpbGQgLnNjb3JlJyk7XG4gICAgICAgIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyczpmaXJzdC1jaGlsZCBwJyk7XG4gICAgICAgIGNvbnN0IGluY3JlYXNlID0gSlNPTi5wYXJzZShzY29yZTEudGV4dENvbnRlbnQpICsgMC41O1xuICAgICAgICBzY29yZTEudGV4dENvbnRlbnQgPSBgJHtpbmNyZWFzZX1gO1xuICAgICAgICByZXR1cm4gYCR7cGxheWVyMS50ZXh0Q29udGVudH0gd2lucyB0aGlzIHJvdW5kIWA7XG4gICAgICB9IGlmICgoYCR7cGxheWVycy5nZXQoKS5wbGF5ZXIyLlh9YCB8fCBgJHtwbGF5ZXJzLmdldCgpLnBsYXllcjIuT31gKSA9PT0gYCR7Y29tYnNbal1baV19YCkge1xuICAgICAgICBjb25zdCBzY29yZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyczpsYXN0LWNoaWxkIC5zY29yZScpO1xuICAgICAgICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnM6bGFzdC1jaGlsZCBwJyk7XG4gICAgICAgIGNvbnN0IGluY3JlYXNlID0gSlNPTi5wYXJzZShzY29yZTIudGV4dENvbnRlbnQpICsgMC41O1xuICAgICAgICBzY29yZTIudGV4dENvbnRlbnQgPSBgJHtpbmNyZWFzZX1gO1xuICAgICAgICByZXR1cm4gYCR7cGxheWVyMi50ZXh0Q29udGVudH0gd2lucyB0aGlzIHJvdW5kIWA7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2VsZHMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYXllci10dXJuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG59XHJcblxyXG4ucG9wLXVwIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDMwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jc2VsZWN0aW9uLWNvbnRhaW5lci5oaWRlLFxyXG4jZ2FtZWJvYXJkLWNvbnRhaW5lci5oaWRlLFxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2dhbWVib2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTAwcHgpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDEwMHB4KTtcclxufVxyXG5cclxuI3NlbGVjdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4jc2VsZWN0aW9uLWNvbnRhaW5lciBoNDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jcGxheWVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ucGxheWVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGRzIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci10dXJuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxyXFxufVxcclxcblxcclxcbi5wb3AtdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiAzMCU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGlvbi1jb250YWluZXIuaGlkZSxcXHJcXG4jZ2FtZWJvYXJkLWNvbnRhaW5lci5oaWRlLFxcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNnYW1lYm9hcmQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxMDBweCk7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxMDBweCk7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3Rpb24tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGlvbi1jb250YWluZXIgaDQ6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVycyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IGRpc3BsYXlHYW1lYm9hcmQgZnJvbSAnLi4vbW9kdWxlcy9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IHsgc2VsZWN0UGxheWVyIH0gZnJvbSAnLi4vbW9kdWxlcy9zZWxlY3RQbGF5ZXIuanMnO1xuaW1wb3J0IHNlbGVjdE9wdGlvbiBmcm9tICcuLi9tb2R1bGVzL3NlbGVjdE9wdGlvbi5qcyc7XG5pbXBvcnQgZGlzcGxheVdpbm5lciBmcm9tICcuLi9tb2R1bGVzL3dpbm5lci5qcyc7XG5pbXBvcnQgeyBwbGF5ZXJzIH0gZnJvbSAnLi4vbW9kdWxlcy9wbGF5ZXJzLmpzJztcbmltcG9ydCBnYW1lIGZyb20gJy4uL21vZHVsZXMvZ2FtZS5qcyc7XG5pbXBvcnQgYWRkUGxheWVyIGZyb20gJy4uL21vZHVsZXMvYWRkUGxheWVyLmpzJztcbmltcG9ydCBoaWRlIGZyb20gJy4uL21vZHVsZXMvaGlkZS5qcyc7XG5pbXBvcnQgcmVmcmVzaCBmcm9tICcuLi9tb2R1bGVzL3JlZnJlc2guanMnO1xuXG5jb25zdCBjaG9vc2VYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3gnKTtcbmNvbnN0IGNob29zZU8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbycpO1xuY29uc3Qgd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpdi13aW5uZXIgaDUnKTtcbmNvbnN0IHdpbm5lckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYtd2lubmVyJyk7XG5jb25zdCBlbnRlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXItaWNvbicpO1xuY29uc3QgaW5wdXROaWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25pY2tuYW1lJyk7XG5jb25zdCBkaXZQbGF5ZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcnMnKTtcbmNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVmcmVzaC1idXR0b24nKTtcblxuZW50ZXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoaW5wdXROaWNrLnZhbHVlICE9PSAnJykge1xuICAgIGFkZFBsYXllcigpO1xuICAgIGlucHV0Tmljay52YWx1ZSA9ICcnO1xuICAgIGlmIChkaXZQbGF5ZXJzLmNoaWxkRWxlbWVudENvdW50ID09PSAyKSB7XG4gICAgICBoaWRlKCk7XG4gICAgICBzZWxlY3RQbGF5ZXIoKTtcbiAgICB9XG4gIH1cbn0pO1xuLy8gRGlzcGxheSB0aGUgZ2FtZWJvYXJkLlxuZGlzcGxheUdhbWVib2FyZCgpO1xuXG4vLyBBZGRzIGxpc3RlbmVycyB0byB0aGUgb3B0aW9uIHNlbGVjdGVkLlxuY2hvb3NlWC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdE9wdGlvbik7XG5jaG9vc2VPLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0T3B0aW9uKTtcbmZ1bmN0aW9uIGluaXRpYWxpemVHYW1lKCkge1xuICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGRzJyk7XG4gIGxldCBwbGF5ZXIxWDsgbGV0IHBsYXllcjFPOyBsZXQgcGxheWVyMlg7IGxldFxuICAgIHBsYXllcjJPO1xuICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBwbGF5ZXIxWCA9IHBsYXllcnMuZ2V0KCkucGxheWVyMS5YLmxlbmd0aDtcbiAgICBwbGF5ZXIxTyA9IHBsYXllcnMuZ2V0KCkucGxheWVyMS5PLmxlbmd0aDtcbiAgICBwbGF5ZXIyWCA9IHBsYXllcnMuZ2V0KCkucGxheWVyMi5YLmxlbmd0aDtcbiAgICBwbGF5ZXIyTyA9IHBsYXllcnMuZ2V0KCkucGxheWVyMi5PLmxlbmd0aDtcbiAgICBpZiAoKChwbGF5ZXIxWCB8fCBwbGF5ZXIxTykgPT09IDMpIHx8ICgocGxheWVyMlggfHwgcGxheWVyMk8pID09PSAzKSkge1xuICAgICAgaWYgKGRpc3BsYXlXaW5uZXIoKSkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgd2lubmVyLnRleHRDb250ZW50ID0gZGlzcGxheVdpbm5lcigpO1xuICAgICAgICB3aW5uZXJEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB3aW5uZXJEaXYuY2xhc3NMaXN0LmFkZCgncG9wLXVwJyk7XG4gICAgICAgIGRpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgocGxheWVyMVggfHwgcGxheWVyMU8pID49IDQgfHwgKHBsYXllcjJYIHx8IHBsYXllcjJPKSA+PSA0KSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIHdpbm5lci50ZXh0Q29udGVudCA9IFwiSXQncyBhIGRyYXchXCI7XG4gICAgICB3aW5uZXJEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgd2lubmVyRGl2LmNsYXNzTGlzdC5hZGQoJ3BvcC11cCcpO1xuICAgICAgZGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWUpKTtcbiAgICB9XG4gIH0sIDEwMCk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKCF3aW5uZXJEaXYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgd2lubmVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcC11cCcpO1xuICAgIH1cbiAgfSk7XG59XG5pbml0aWFsaXplR2FtZSgpO1xuXG5yZWZyZXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZWZyZXNoKCk7XG4gIGluaXRpYWxpemVHYW1lKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=