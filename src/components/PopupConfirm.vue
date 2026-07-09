<script setup lang="ts">
import { Teleport } from 'vue';
import ButtonText from './ButtonText.vue';

const { isOpened, text } = defineProps<{
  isOpened: boolean;
  text: string;
}>();

const emit = defineEmits<{
  (e: 'ok'): void;
  (e: 'cancel'): void;
}>();
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpened" class="popup__cover">
      <div class="popup">
        {{ text }}
        <div class="popup__actions">
          <ButtonText @click="emit('ok')">Да</ButtonText>
          <ButtonText @click="emit('cancel')">Нет</ButtonText>
        </div>
      </div>
    </div></Teleport
  >
</template>

<style scoped>
.popup__cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-inactive);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  padding: 20px;
  border-radius: 20px;
  background-color: var(--color-background);
  min-width: 350px;
  font-size: 18px;
}

.popup__actions {
  margin-top: 26px;
  display: flex;
  justify-content: space-between;
}
</style>
