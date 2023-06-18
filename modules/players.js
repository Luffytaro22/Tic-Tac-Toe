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

export const players = {
  get() {
    return Players;
  },
  set(newPlayers) {
    Players = newPlayers;
  },
};
