<script setup>
const props = defineProps({
  letter: {
    type: String,
    validator(value) {
      return value.length === 1;
    },
  },
  dataState: {
    type: String,
    validator(value) {
      return ['empty', 'tbd', 'absent', 'present', 'correct'].includes(value);
    },
  },
});
</script>

<template>
  <div class="p-1 mx-1 bg-gray-500">
    <span class="font-mono font-semibold text-5xl">
      <span v-if="letter" class="text-white">
        {{ letter.toUpperCase() }}
      </span>
      <span v-else class="text-gray-500">
        A
      </span>
    </span>
  </div>
</template>
