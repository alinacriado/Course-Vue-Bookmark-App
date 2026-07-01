<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categories.store';
import { onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import ButtonIcon from './ButtonIcon.vue';
import IconPlus from '@/icons/IconPlus.vue';
import { useAuthStore } from '@/stores/auth.store.ts';

const categoriesStore = useCategoriesStore();
const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  categoriesStore.fetchAllCategories();
});

function logout() {
  authStore.clearToken();
  router.push({ name: 'auth' });
}
</script>

<template>
  <ul class="categories__list">
    <li
      v-for="category in categoriesStore.categoriesList"
      :key="category.id"
      class="categories__item"
    >
      <RouterLink
        active-class="active-link"
        :to="`/main/${category.alias}`"
        class="categories__link"
        >{{ category.name }}</RouterLink
      >
    </li>
    <li>
      <ButtonIcon @click="categoriesStore.createCategory">
        <IconPlus />
      </ButtonIcon>
    </li>
    <li>
      <a href="#" @click="logout" class="categories__link">Выход</a>
    </li>
  </ul>
</template>

<style scoped>
.categories__list {
  display: flex;
  flex-direction: column;
  gap: 34px;
}

.categories__link {
  font-size: 14px;
  line-height: 110%;
  letter-spacing: 0.3px;
  color: var(--color-fg);
  transition: all 0.5s;
}

.categories__link:not(.active-link):hover {
  font-size: 20px;
  font-weight: 700;
}

.active-link {
  font-size: 24px;
  font-weight: 700;
}
</style>
