<script setup lang="ts">
import type { Category } from '@/interfaces/category.interface';
import { useCategoriesStore } from '@/stores/categories.store';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const state = useCategoriesStore();
const category = ref<Category>();

watch(
  () => ({
    alias: route.params.alias,
    categoriesList: state.categoriesList,
  }),
  (data) => {
    category.value = state.getCategoryByAlias(data.alias);
  },
);
</script>

<template>Category {{ category?.name }}</template>
