import { API_ROUTES, client } from "@/api";
import type { Bookmark } from "@/interfaces/bookmark.interface";
import { defineStore } from "pinia"
import { ref } from "vue";

export const useBookmarksStore = defineStore('bookmarks', () => {
  const bookmarksList = ref<Bookmark[]>([]);

  async function fetchBookmarksByCategoryId(categoryId: number | undefined) {
    if (typeof categoryId == 'number') {
      const { data } = await client().get<Bookmark[]>(API_ROUTES.bookmarks(categoryId));
      bookmarksList.value = data;
    }
    return;
  }

  return {bookmarksList, fetchBookmarksByCategoryId}
})