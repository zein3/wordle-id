<script setup>
import Row from './WordleRow.vue';
import { ref } from 'vue';

const wordleWord = 'hello';

const currentId = ref(0);
const rows = ref([]);


function startGame() {
  currentId.value = 0;
  rows.value = [
  {
    id: 0,
    isSelected: true
  },
  {
    id: 1,
    isSelected: false
  },
  {
    id: 2,
    isSelected: false
  },
  {
    id: 3,
    isSelected: false
  },
  {
    id: 4,
    isSelected: false
  },
  {
    id: 5,
    isSelected: false
  },
  ];
}

function submitWord(word) {
  if (word.length != 5) {
    return;
  }

  currentId.value = currentId.value + 1;
  selectRow(currentId.value);
}

function selectRow(id) {
  rows.value = rows.value.map((r) => {
    return (r.id == id)
      ? {
        ...r,
        isSelected: true,
      }
      : {
        ...r,
        isSelected: false,
      }
  })
}

startGame();
</script>

<template>
  <div class="flex flex-col p-3 bg-gray-200" style="user-select: none; cursor: pointer;">
    <Row
      v-for="row in rows"
      :key="row.id"
      :isSelected="row.isSelected"
      @answer="submitWord"
    />
  </div>
</template>
