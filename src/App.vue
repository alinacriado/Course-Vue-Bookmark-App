<script setup lang="ts">
import { onMounted } from 'vue';
import ProfileAvatar from './components/ProfileAvatar.vue';
import { API_ROUTES } from './components/api.ts';
import type { Profile } from './interfaces/profile.interface.ts';
import { useProfileStore } from './stores/profile.store.ts';

const store = useProfileStore();

async function fetchProfile() {
  const data = await fetch(API_ROUTES.profile);
  const res = (await data.json()) as Profile;
  store.profile = res;
}
onMounted(() => {
  fetchProfile();
});
</script>

<template>
  <div class="app">
    <nav class="nav"><ProfileAvatar v-if="store.profile" :name="store.profile.name" /></nav>
    <main>Контент</main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  gap: 300px;
  max-width: 1460px;
  padding: 140px 100px 0;
  margin: 0 auto;
}

.nav {
  min-width: 140px;
}
</style>
