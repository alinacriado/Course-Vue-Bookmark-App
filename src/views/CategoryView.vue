<script setup lang="ts">
import type { Category } from '@/interfaces/category.interface';
import { useCategoriesStore } from '@/stores/categories.store';
import { ref, watch } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

const route = useRoute();
const state = useCategoriesStore();
const category = ref<Category>();

watch(
  () => ({
    categoriesList: state.categoriesList,
  }),
  () => {
    category.value = state.getCategoryByAlias(route.params.alias);
  },
);

onBeforeRouteUpdate((to) => {
  category.value = state.getCategoryByAlias(to.params.alias);
});
</script>

<template>Category {{ category?.name }}</template>
