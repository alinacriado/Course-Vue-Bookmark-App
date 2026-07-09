<script setup lang="ts">
const data = defineModel<string>();
</script>

<template><input type="text" v-model="data" class="input-string" /></template>

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
