<template>
  <div class="flex flex-col items-center justify-center min-h-full p-4 flex-1">
    <nuxt-img
      class="absolute inset-0 w-full h-full object-cover object-center"
      src="/assets/images/base-preview.jpg"
      fit="cover"
      quality="80"
      size="1920"
      height="1080"
      preload
      format="webp" />
    <div class="relative z-10">
      <button class="btn btn-primary">Почати гру</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
