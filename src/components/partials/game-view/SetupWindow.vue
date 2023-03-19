<template>
  <img
    class="absolute inset-0 w-full h-full object-cover object-center"
    src="/assets/images/base-preview.jpg"
    alt="start-game" />
  <div class="relative z-10 p-4">
    <h1 class="text-5xl mb-6 text-white">Остання надія</h1>
    <setup-game-form />
  </div>
</template>

<script setup lang="ts">
  import SetupGameForm from '~/components/partials/forms/SetupGameForm.vue';
</script>
