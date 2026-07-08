<script setup lang="ts">
const { option } = defineProps<{ option: string }>();

const SORT_OPTIONS = [
  { option: 'date', name: 'По дате' },
  { option: 'title', name: 'По названию' },
];

const emit = defineEmits<{
  (event: 'sort', option: string): void;
}>();
</script>

<template>
  <div class="bookmark-sort">
    <button
      v-for="item in SORT_OPTIONS"
      :key="item.option"
      class="bookmark-sort__item"
      @click="() => emit('sort', item.option)"
      :class="option == item.option ? 'active' : ''"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<style scoped>
.bookmark-sort {
  margin-top: 16px;
  display: flex;
  gap: 8px;
}

.bookmark-sort__item {
  background: none;
  border: none;
  opacity: 0.4;
  font-size: 16px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
}

.bookmark-sort__item.active {
  opacity: 1;
  border-bottom: 2px solid var(--color-fg);
  font-weight: 700;
}
</style>
