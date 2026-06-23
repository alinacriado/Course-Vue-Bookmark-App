import { API_ROUTES, http } from "@/api";
import type { LoginResponse } from "@/interfaces/auth.interface";
import type { Profile } from "@/interfaces/profile.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>();

  async function login(email: string, password: string) {
    const { data } = await http.post<LoginResponse>(API_ROUTES.auth.login, {
      email,
      password
    });
    token.value = data.token;
  }
  return { token, login };
});