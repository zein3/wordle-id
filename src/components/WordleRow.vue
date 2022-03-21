<script setup>
import CharBox from './WordleChar.vue';
import { ref, computed, onMounted } from 'vue';

onMounted(() => {
  window.addEventListener('keyup', userType);
})

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  isSelected: {
    type: Boolean,
    required: true
  },
});

const letters = ref('');

const selectionClass = computed(() => {
  return (props.isSelected)
    ? "border-2 border-teal-500"
    : ""
});

function userType(e) {
  if (props.isSelected) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      if (letters.value.length >= 5) {
        return;
      }
      letters.value = letters.value + e.key;
    } else if (e.keyCode === 8) {
      letters.value = letters.value.slice(0, letters.value.length-1);
    }
  }
}

</script>

<template>
  <div :class="selectionClass" class="flex flex-row my-1 p-2 bg-neutral-800">
    <CharBox v-for="l in letters" :letter="l" />
    <CharBox v-for="i in 5-letters.length" />
  </div>
</template>
