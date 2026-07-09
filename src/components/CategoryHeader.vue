<script setup lang="ts">
import IconTrash from '@/icons/IconTrash.vue';
import { ref } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import IconEdit from '@/icons/IconEdit.vue';
import IconOk from '@/icons/IconOk.vue';
import type { Category } from '@/interfaces/category.interface.ts';
import { useCategoriesStore } from '@/stores/categories.store.ts';
import InputString from './InputString.vue';
import { useRouter } from 'vue-router';

const { category } = defineProps<{ category: Category }>();
const newCategoryName = ref<string>(category.name);
const isEditing = ref(false);

const categoriesStore = useCategoriesStore();
const router = useRouter();

function editCategory() {
  isEditing.value = true;
}

function updateCategory() {
  if (!isEditing.value) return;

  isEditing.value = false;
  categoriesStore.updateCategoryById(category.id, newCategoryName.value);
}

function deleteCategory() {
  categoriesStore.deleteCategoryById(category.id);
  router.push({ name: 'main' });
}
</script>

<template>
  <div class="category-header">
    <div v-if="!isEditing" class="category-header__name">{{ category.name }}</div>
    <div v-else class="category-header__input">
      <InputString
        v-model="newCategoryName"
        is-focused
        @keyup.enter="updateCategory"
        @blur="updateCategory"
      />
      <ButtonIcon @click="updateCategory"><IconOk /></ButtonIcon>
    </div>
    <div class="category-header__actions">
      <ButtonIcon v-if="!isEditing" @click="editCategory"><IconEdit /></ButtonIcon>
      <ButtonIcon @click="deleteCategory"><IconTrash /></ButtonIcon>
    </div>
  </div>
</template>

<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 40px;
}

.category-header__input {
  display: flex;
  gap: 5px;
}

.category-header__name {
  font-size: 24px;
  line-height: 110%;
  font-weight: 500;
}

.category-header__actions {
  display: flex;
  gap: 10px;
}
</style>
