import { defineStore } from 'pinia';

export const useWordleStore = defineStore('wordle', {
  state: () => {
    return {
      word: 'hello',
      gameStarted: false,
    }
  },
  actions: {
    startGame() {
      this.gameStarted = true;
    },
    restartGame() {
      // the GameBoard component must initialize the game when gameStarted is set to false
      this.gameStarted = false;
    }
  }
});
