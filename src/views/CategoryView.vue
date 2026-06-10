<script setup lang="ts">
import type { Category } from '@/interfaces/category.interface';
import { useBookmarksStore } from '@/stores/bookmarks.store';
import { useCategoriesStore } from '@/stores/categories.store';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoriesStore = useCategoriesStore();
const bookmarksStore = useBookmarksStore();
const category = ref<Category>();

onMounted(() => {
  category.value = categoriesStore.getCategoryByAlias(route.params.alias);
  bookmarksStore.fetchBookmarksByCategoryId(category.value?.id);
});

watch(
  () => ({
    alias: route.params.alias,
    categoriesList: categoriesStore.categoriesList,
  }),
  (data) => {
    category.value = categoriesStore.getCategoryByAlias(data.alias);
    bookmarksStore.fetchBookmarksByCategoryId(category.value?.id);
  },
);
</script>

<template>
  <div class="category-view__wrapper">
    <div class="category-view__header">{{ category?.name }}</div>
    <ul class="category-view__list">
      <li
        v-for="bookmark in bookmarksStore.bookmarksList"
        :key="bookmark.id"
        class="category-view__item"
      >
        {{ bookmark.title }}
      </li>
    </ul>
  </div>
</template>
