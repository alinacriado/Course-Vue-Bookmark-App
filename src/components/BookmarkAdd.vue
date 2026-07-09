<script setup lang="ts">
import IconPlus from '@/icons/IconPlus.vue';
import ButtonIcon from './ButtonIcon.vue';
import { ref } from 'vue';
import InputString from './InputString.vue';
import IconOk from '@/icons/IconOk.vue';
import { useBookmarksStore } from '@/stores/bookmarks.store.ts';

const { categoryId } = defineProps<{ categoryId: number | undefined }>();
const bookmarksStore = useBookmarksStore();
const isEditing = ref(false);
const newUrl = ref<string>();

function toggleIsEditing() {
  isEditing.value = !isEditing.value;
}

function createBookmark() {
  if (!newUrl.value || !categoryId) {
    return;
  }

  bookmarksStore.createBookmark(categoryId, newUrl.value);
  newUrl.value = '';
  toggleIsEditing();
}
</script>

<template>
  <div class="bookmark-add">
    <div v-if="isEditing" class="bookmark-add__form">
      <InputString v-model="newUrl" placeholder="Вставьте ссылку" is-focused />
      <ButtonIcon @click="createBookmark"><IconOk /></ButtonIcon>
    </div>
    <ButtonIcon v-else :size="48" @click="toggleIsEditing"><IconPlus /></ButtonIcon>
  </div>
</template>

<style scoped>
.bookmark-add {
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed var(--color-fg);
  height: 100%;
  padding: 20px;
}

.bookmark-add__form {
  display: flex;
  column-gap: 10px;
}
</style>
