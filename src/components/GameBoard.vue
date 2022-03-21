<script setup>
import Row from './WordleRow.vue';
import { ref } from 'vue';

const rows = ref([
  {
    id: 0,
    isLocked: false,
    isSelected: false
  },
  {
    id: 1,
    isLocked: false,
    isSelected: true
  },
  {
    id: 2,
    isLocked: false,
    isSelected: true
  },
]);


function selectRow(row) {
  rows.value = rows.value.map((r) => {
    return (r.id == row.id)
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
      :id="row.id"
      :isLocked="row.isLocked"
      :isSelected="row.isSelected"
      @click="selectRow(row)"
    />
  </div>
</template>
