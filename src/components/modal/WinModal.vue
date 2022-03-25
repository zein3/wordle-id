<script setup>
import Modal from './Modal.vue';
import PrimaryButton from '../templates/buttons/primary.vue';
import { useWordleStore } from '../../stores/wordle.js';

const wordleStore = useWordleStore();

function restartGame() {
  wordleStore.restartGame();
}
</script>

<template>
  <Modal class="bg-green-500">
    <h3>You win!</h3>
    <PrimaryButton @click="restartGame">
      Play again
    </PrimaryButton>
  </Modal>
</template>
