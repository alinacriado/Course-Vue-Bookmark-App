<script setup lang="ts">
import type { Bookmark } from '@/interfaces/bookmark.interface';
import IconTrashBig from '@/icons/IconTrashBig.vue';
import IconLink from '@/icons/IconLink.vue';
import ButtonIconBig from './ButtonIconBig.vue';
import { useBookmarksStore } from '@/stores/bookmarks.store.ts';

const { bookmark } = defineProps<{ bookmark: Bookmark }>();
const bookmarksStore = useBookmarksStore();

function deleteBookmark() {
  bookmarksStore.deleteBookmarkById(bookmark.id, bookmark.category_id);
}
</script>

<template>
  <div class="bookmark-card">
    <img :src="bookmark.image" :alt="bookmark.title" class="bookmark-card__image" />
    <div class="bookmark-card__title">{{ bookmark.title }}</div>
    <div class="bookmark-card__buttons">
      <ButtonIconBig @click="deleteBookmark"><IconTrashBig /></ButtonIconBig>
      <a :href="bookmark.url" target="blank"
        ><ButtonIconBig><IconLink /></ButtonIconBig
      ></a>
    </div>
  </div>
</template>

<style scoped>
.bookmark-card {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: var(--color-fg);
  box-shadow: 0px 10px 10px 0px rgba(245, 245, 247, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.bookmark-card__image {
  height: 160px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  background-position: center;
}

.bookmark-card__title {
  color: var(--color-background);
  font-size: 16px;
  font-weight: 500;
}

.bookmark-card__buttons {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}
</style>
