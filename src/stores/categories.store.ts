
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

  return {categoriesList , fetchAllCategories}
})