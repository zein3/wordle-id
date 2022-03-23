import { defineStore } from 'pinia';
import words from '../data/words.js';

function getRandomWord() {
  const rand = Math.floor(Math.random() * words.length);
  return words[rand];
}

export const useWordleStore = defineStore('wordle', {
  state: () => {
    return {
      word: getRandomWord(),
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
    },
    getNewWord() {
      this.word = getRandomWord();
    },
  }
});
