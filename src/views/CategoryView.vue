<script setup lang="ts">
import BookmarkAdd from '@/components/BookmarkAdd.vue';
import BookmarkCard from '@/components/BookmarkCard.vue';
import BookmarkSort from '@/components/BookmarkSort.vue';
import CategoryHeader from '@/components/CategoryHeader.vue';
import type { Category } from '@/interfaces/category.interface';
import { useBookmarksStore } from '@/stores/bookmarks.store';
import { useCategoriesStore } from '@/stores/categories.store';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoriesStore = useCategoriesStore();
const bookmarksStore = useBookmarksStore();
const category = ref<Category>();

function sortBookmarks(sort: string) {
  bookmarksStore.activeSort = sort;

  if (category.value) {
    bookmarksStore.fetchBookmarksByCategoryId(category.value.id, bookmarksStore.activeSort);
  }
}

onMounted(() => {
  category.value = categoriesStore.getCategoryByAlias(route.params.alias);
  bookmarksStore.fetchBookmarksByCategoryId(category.value?.id, bookmarksStore.activeSort);
});

watch(
  () => ({
    alias: route.params.alias,
    categoriesList: categoriesStore.categoriesList,
  }),
  (data) => {
    category.value = categoriesStore.getCategoryByAlias(data.alias);
    bookmarksStore.fetchBookmarksByCategoryId(category.value?.id, bookmarksStore.activeSort);
  },
);
</script>

<template>
  <div class="category-view__wrapper">
    <CategoryHeader v-if="category" :category="category" />
    <BookmarkSort :option="bookmarksStore.activeSort" @sort="sortBookmarks" />
    <ul class="category-view__bookmarks-list">
      <li v-for="bookmark in bookmarksStore.bookmarksList" :key="bookmark.id">
        <BookmarkCard :bookmark="bookmark" />
      </li>
      <BookmarkAdd :category-id="category?.id" />
    </ul>
  </div>
</template>

<style scoped>
.category-view__bookmarks-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}
</style>
