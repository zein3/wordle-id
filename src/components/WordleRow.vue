<script setup>
import CharBox from './WordleChar.vue';
import { ref, computed, onMounted } from 'vue';

onMounted(() => {
  window.addEventListener('keyup', userType);
})

const props = defineProps({
  isSelected: {
    type: Boolean,
    required: true
  },
});

const emit = defineEmits(['answer']);

const letters = ref('');

const selectionClass = computed(() => {
  return (props.isSelected)
    ? "border-2 border-teal-500"
    : ""
});

function userType(e) {
  if (props.isSelected) {
    console.log(e);
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      if (letters.value.length >= 5) {
        return;
      }
      letters.value = letters.value + e.key;
    } 
    // backspace
    else if (e.keyCode === 8) {
      letters.value = letters.value.slice(0, letters.value.length-1);
    }
    // enter
    else if (e.keyCode === 13) {
      emit('answer', letters.value);
    }
  }
}

</script>

<template>
  <div :class="selectionClass" class="flex flex-row my-1 p-2 bg-neutral-800">
    <CharBox v-for="l in letters" :letter="l" letterState="tbd"  />
    <CharBox v-for="i in 5-letters.length" letterState="tbd" />
  </div>
</template>
