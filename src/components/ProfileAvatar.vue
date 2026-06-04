<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store.ts';
import { onMounted } from 'vue';

const profileStore = useProfileStore();

onMounted(() => {
  profileStore.fetchProfile();
});
</script>

<template>
  <div class="profile-avatar" v-if="profileStore.profile">
    <img
      src="/src/assets/avatar.png"
      alt="Изображение пользователя"
      class="profile-avatar__image"
    />
    <div class="profile-avatar__text">
      Привет, <span>{{ profileStore.profile.name }}!</span>
    </div>
  </div>
</template>

<style scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
}

.profile-avatar__image {
  width: 80px;
  height: 80px;
}

.profile-avatar__text {
  font-size: 18px;
  line-height: 110%;
  letter-spacing: 0.4px;
}

.profile-avatar__text > span {
  font-weight: 700;
}
</style>
