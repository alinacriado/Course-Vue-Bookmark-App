import { API_ROUTES, http } from "@/api";
import type { Bookmark } from "@/interfaces/bookmark.interface";
import { defineStore } from "pinia"
import { ref } from "vue";

export const useBookmarksStore = defineStore('bookmarks', () => {
  const bookmarksList = ref<Bookmark[]>([]);
  const activeSort = ref<string>('date');

  async function fetchBookmarksByCategoryId(categoryId: number | undefined, sort: string) {
    if (typeof categoryId == 'number') {
      const { data } = await http.get<Bookmark[]>(API_ROUTES.bookmarks.get(categoryId), {
        params: {
          sort
        }
      });
      bookmarksList.value = data;
    }
    return;
  }

  async function deleteBookmarkById(bookmarkId: number | undefined, categoryId: number) {
    if (typeof bookmarkId == 'number') {
      await http.delete(API_ROUTES.bookmarks.delete(bookmarkId));
      fetchBookmarksByCategoryId(categoryId, activeSort.value);
    }
    return;
  }

  async function createBookmark(categoryId: number, url: string) {
    const { data } = await http.post<Bookmark>(API_ROUTES.bookmarks.create, {
      category_id: categoryId,
      url
    });
    bookmarksList.value.push(data);
  }

  return {bookmarksList, fetchBookmarksByCategoryId, deleteBookmarkById, activeSort, createBookmark}
})