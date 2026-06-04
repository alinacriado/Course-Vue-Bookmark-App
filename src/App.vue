<script setup lang="ts">
import { onMounted } from 'vue';
import ProfileAvatar from './components/ProfileAvatar.vue';
import { useProfileStore } from './stores/profile.store.ts';

const ProfileStore = useProfileStore();

onMounted(() => {
  ProfileStore.fetchProfile();
});
</script>

<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar v-if="ProfileStore.profile" :name="ProfileStore.profile.name" />
    </nav>
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
