<script setup lang="ts"></script>

<template>
  <button class="button-icon-big">
    <slot />
  </button>
</template>

<style scoped>
.button-icon-big {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-fg);
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  border: 3px solid var(--color-background);
}

.button-icon-big:hover {
  background-color: var(--color-fg-hover);
}
</style>
