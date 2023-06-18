let _players = {
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

export let players = {
  get() {
    return _players;
  },
  set(newPlayers) {
    _players = newPlayers;
  },
};
