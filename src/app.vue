<template>
  <div>
    <client-only>
      <template #default>
        <main-slider />
      </template>
      <template #fallback>
        <base-loader class="fixed" />
      </template>
    </client-only>
  </div>
</template>
<script setup lang="ts">
  import MainSlider from '~/components/game-view/MainSlider.vue';
  import BaseLoader from '~/components/ui/BaseLoader.vue';
</script>
