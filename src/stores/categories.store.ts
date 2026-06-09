
import { API_ROUTES, http } from "@/api";
import type { Category } from "@/interfaces/category.interface";
import { defineStore } from "pinia";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";


export const useCategoriesStore = defineStore('categories', () => {
  const categoriesList = ref<Category[]>([]);

  async function fetchAllCategories() {
    const { data } = await http.get<Category[]>(API_ROUTES.categories);
    categoriesList.value = data;
  }

  async function createCategory() {
    const { data } = await http.post<Category>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: uuidv4()
    });

    categoriesList.value.push(data);
  }

  function getCategoryByAlias(alias: string | string[] | undefined): Category | undefined {
    if (typeof alias == 'string') {
      return categoriesList.value.find(category => category.alias == alias);
    }
    return;
  }

  return {categoriesList , fetchAllCategories, createCategory, getCategoryByAlias}
})