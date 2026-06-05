<script setup lang="ts"></script>

<template>
  <button class="button-text">
    <slot />
  </button>
</template>

<style scoped>
.button-text {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 12px 54px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 100%;
  color: var(--color-background);
  background-color: var(--color-fg);
  cursor: pointer;
  border-radius: 50px;
  border: none;
  transition: background-color 0.3s;
}

.button-text:hover {
  background-color: var(--color-fg-hover);
}
</style>
