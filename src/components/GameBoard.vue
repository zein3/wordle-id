<script setup>
import Row from './WordleRow.vue';
import { useWordleStore } from '../stores/wordle.js'
import { ref, onMounted } from 'vue';

const wordleStore = useWordleStore();

const currentId = ref(0);
const rows = ref([]);


onMounted(() => {
  startGame();
});


wordleStore.$subscribe((mutation, state) => {
  if (!state.gameStarted) {
    startGame();
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

  wordleStore.getNewWord();
  wordleStore.startGame();

  console.log(wordleStore.word);
}

function numberOfLetter(word, letter) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) count++;
  }

  return count;
}

function numberOfCorrectLetter(word, letter) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== letter) continue;
    if (word[i] === wordleStore.word[i]) count++;
  }

  return count;
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
      const nWord = numberOfLetter(wordleStore.word, word[i]);
      const nCorrect = numberOfCorrectLetter(word, word[i]);
      const nShown = numberOfLetter(word.slice(0, i), word[i]);

      if (Math.abs(nShown - nCorrect) < (nWord - nCorrect)) {
        newStatusCode.push("present");
      } else {
        newStatusCode.push("absent");
      }

    } else {
      newStatusCode.push("absent");
    }
  }

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
