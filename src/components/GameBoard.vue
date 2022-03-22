<script setup>
import Row from './WordleRow.vue';
import { useWordleStore } from '../stores/wordle.js'
import { ref, onUpdated, onMounted } from 'vue';

const wordleStore = useWordleStore();

const currentId = ref(0);
const rows = ref([]);


onMounted(() => {
  startGame();
  wordleStore.startGame();
});


wordleStore.$subscribe((mutation, state) => {
  if (!state.gameStarted) {
    startGame();
    wordleStore.startGame();
  }
});


/**
  statusCode is used to tell the row components which letter should be colored black, yellow, or green.
*/
function startGame() {
  currentId.value = 0;
  rows.value = [
  {
    id: 0,
    isSelected: true,
    statusCode: ["tbd", "tbd", "tbd", "tbd", "tbd"],
  },
  {
    id: 1,
    isSelected: false,
    statusCode: ["tbd", "tbd", "tbd", "tbd", "tbd"],
  },
  {
    id: 2,
    isSelected: false,
    statusCode: ["tbd", "tbd", "tbd", "tbd", "tbd"],
  },
  {
    id: 3,
    isSelected: false,
    statusCode: ["tbd", "tbd", "tbd", "tbd", "tbd"],
  },
  {
    id: 4,
    isSelected: false,
    statusCode: ["tbd", "tbd", "tbd", "tbd", "tbd"],
  },
  {
    id: 5,
    isSelected: false,
    statusCode: ["tbd", "tbd", "tbd", "tbd", "tbd"],
  },
  ];
}

function submitWord(word) {
  if (word.length != 5) {
    return;
  }

  // do some process with word
  let newStatusCode = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === wordleStore.word[i]) {
      newStatusCode.push("correct");
    } else if (wordleStore.word.includes(word[i])) {
      newStatusCode.push("present");
    } else {
      newStatusCode.push("absent");
    }
  }

  rows.value[currentId] = {
    ...rows.value[currentId],
    statusCode: newStatusCode,
  };

  updateStatusCode(currentId.value, newStatusCode);
  selectRow(++currentId.value);
}

function updateStatusCode(id, newStatusCode) {
  rows.value = rows.value.map((r) => {
    return (r.id === id)
      ? {
        ...r,
        statusCode: newStatusCode,
      }
      : r;
  })
}

function selectRow(id) {
  rows.value = rows.value.map((r) => {
    return (r.id === id)
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

</script>

<template>
  <div class="flex flex-col p-3 bg-gray-200" style="user-select: none; cursor: pointer;">
    <Row
      v-for="row in rows"
      :key="row.id"
      :isSelected="row.isSelected"
      :statusCode="row.statusCode"
      @answer="submitWord"
    />
  </div>
</template>
