<script setup lang="ts">
const { name } = defineProps<{ name: string }>();
</script>

<template>
  <div class="profile-avatar">
    <img
      src="/src/assets/avatar.png"
      alt="Изображение пользователя"
      class="profile-avatar__image"
    />
    <div class="profile-avatar__text">
      Привет, <span>{{ name }}!</span>
    </div>
  </div>
</template>

<style scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  gap: 24px;
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
