<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';

const data = defineModel<string>();
const input = useTemplateRef<HTMLInputElement>('input');

const { isFocused = false } = defineProps<{ isFocused?: boolean }>();

onMounted(() => {
  if (isFocused && input.value) {
    input.value.focus();
  }
});
</script>

<template><input v-model="data" ref="input" class="input-string" /></template>

<style scoped>
.input-string {
  border: none;
  border-bottom: 1px solid var(--color-fg);
  font-size: 24px;
  line-height: 130%;
  color: var(--color-fg);
  width: 100%;
  max-width: 273px;
}

.input-string:placeholder {
  color: var(--color-inactive);
}
</style>
