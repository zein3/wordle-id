<script setup>
import Modal from './Modal.vue';
import DangerButton from '../templates/buttons/danger.vue';
import { useWordleStore } from '../../stores/wordle.js';

const wordleStore = useWordleStore();

function restartGame() {
  wordleStore.restartGame();
}
</script>

<template>
  <Modal class="bg-gray-700">
    <h3>You lose!</h3>
    <DangerButton @click="restartGame">
      Play again
    </DangerButton>
  </Modal>
</template>
