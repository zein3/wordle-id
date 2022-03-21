<script setup>
import Row from './WordleRow.vue';
import { ref } from 'vue';

const rows = ref([
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
]);


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
</script>

<template>
  <div class="flex flex-col p-3 bg-gray-200" style="user-select: none; cursor: pointer;">
    <Row
      v-for="row in rows"
      :id="row.id"
      :isSelected="row.isSelected"
      @click="selectRow(row.id)"
    />
  </div>
</template>
