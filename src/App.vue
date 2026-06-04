<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ProfileAvatar from './components/ProfileAvatar.vue';
import { API_ROUTES } from './components/api.ts';
import type { Profile } from './interfaces/profile.ts';

const profile = ref<Profile>();

async function fetchProfile() {
  const data = await fetch(API_ROUTES.profile);
  const res = (await data.json()) as Profile;
  profile.value = res;
}
onMounted(() => {
  fetchProfile();
});
</script>

<template>
  <div class="app">
    <nav class="nav"><ProfileAvatar v-if="profile" :name="profile?.name" /></nav>
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
