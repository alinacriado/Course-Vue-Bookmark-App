
import { API_ROUTES, http } from "@/api";
import type { Category } from "@/interfaces/category.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCategoriesStore = defineStore('categories', () => {
  const categoriesList = ref<Category[]>([]);

  async function fetchAllCategories() {
    const { data } = await http.get<Category[]>(API_ROUTES.categories);
    categoriesList.value = data;
  }

  async function createCategory() {
    const { data } = await http.post<Category>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: 'new'
    });

    categoriesList.value.push(data);
  }

  return {categoriesList , fetchAllCategories, createCategory}
})