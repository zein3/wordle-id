<script setup>
import CharBox from './WordleChar.vue';
import { ref, computed } from 'vue';

const props = defineProps({
  isLocked: Boolean,
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
</script>

<template>
  <div :class="selectionClass" class="flex flex-row my-1 p-2 bg-neutral-800">
    <CharBox letter="b" />
    <CharBox />
    <CharBox />
    <CharBox />
    <CharBox />
  </div>
</template>
