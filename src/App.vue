<script setup lang="ts">
import CategoriesList from './components/CategoriesList.vue';
import ProfileAvatar from './components/ProfileAvatar.vue';
</script>

<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar />
      <CategoriesList />
    </nav>
    <main>
      <RouterView />
    </main>
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
