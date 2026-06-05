<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categories.store';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import ButtonIcon from './ButtonIcon.vue';
import IconPlus from '@/icons/IconPlus.vue';

const categoriesStore = useCategoriesStore();

onMounted(() => {
  categoriesStore.fetchAllCategories();
});
</script>

<template>
  <ul class="categories__list">
    <li
      v-for="category in categoriesStore.categoriesList"
      :key="category.id"
      class="categories__item"
    >
      <RouterLink :to="`/main/${category.alias}`">{{ category.name }}</RouterLink>
    </li>
    <li>
      <ButtonIcon @click="categoriesStore.createCategory">
        <IconPlus />
      </ButtonIcon>
    </li>
  </ul>
</template>

<style scoped>
.categories__list {
  display: flex;
  flex-direction: column;
  gap: 34px;
}

.categories__item a {
  font-size: 14px;
  line-height: 110%;
  letter-spacing: 0.3px;
  color: var(--color-fg);
  transition: all 0.5s;
}

.categories__item a:hover {
  font-size: 24px;
  font-weight: 700;
}
</style>
