<script setup>
import { computed } from 'vue';

const props = defineProps({
  letter: {
    type: String,
    validator(value) {
      return value.length === 1;
    },
  },
  letterState: {
    required: true,
    type: String,
    validator(value) {
      return ['tbd', 'absent', 'present', 'correct'].includes(value);
    },
  },
});

const bgStateClass = computed(() => {
  switch(props.letterState) {
    case 'tbd':
      return 'bg-black text-black';
    case 'absent':
      return 'bg-stone-600 text-stone-600';
    case 'present':
      return 'bg-yellow-500 text-yellow-500';
    case 'correct':
      return 'bg-green-700 text-green-700';
  }
});
</script>

<template>
  <div class="p-1 mx-1" :class="bgStateClass">
    <span class="font-mono font-semibold text-5xl">
      <span v-if="letter" class="text-white">
        {{ letter.toUpperCase() }}
      </span>
      <span v-else>
        A
      </span>
    </span>
  </div>
</template>
