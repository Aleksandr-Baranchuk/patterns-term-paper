<template>
  <img
    class="absolute inset-0 w-full h-full object-cover object-center"
    src="/assets/images/base-preview.jpg" />
  <setup-game-form class="relative z-10 p-4" />
</template>

<script setup lang="ts">
  import SetupGameForm from '~/components/partials/forms/SetupGameForm.vue';
</script>
