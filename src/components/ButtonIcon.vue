<script setup lang="ts">
const { size = 32 } = defineProps<{ size?: number }>();
</script>

<template>
  <button class="button-icon" :style="{ width: `${size}px`, height: `${size}px` }">
    <slot />
  </button>
</template>

<style scoped>
.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-fg);
  cursor: pointer;
  border-radius: 50%;
  border: none;
  transition: background-color 0.3s;
}

.button-icon:hover {
  background-color: var(--color-fg-hover);
}
</style>
