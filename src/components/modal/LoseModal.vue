<script setup>
import Modal from './Modal.vue';
import { useWordleStore } from '../../stores/wordle.js';

const wordleStore = useWordleStore();

function restartGame() {
  wordleStore.restartGame();
}
</script>

<template>
  <Modal class="bg-red-500">
    <h3>You lose!</h3>
    <button @click="restartGame">Restart game</button>
  </Modal>
</template>
