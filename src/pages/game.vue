<template>
  <div>
    <app-header />
    <main>
      <client-only>
        <template #default>
          <main-slider />
        </template>
        <template #fallback>
          <base-loader class="fixed" />
        </template>
      </client-only>
    </main>
  </div>
</template>
<script setup lang="ts">
  import MainSlider from '~/components/partials/game-view/MainSlider.vue';
  import BaseLoader from '~/components/ui/BaseLoader.vue';
  import useGameStore from '~/store/game';
  import AppHeader from '~/components/partials/AppHeader.vue';
  const gameStore = useGameStore();
  const { error } = await gameStore.fetchGameWindows();

  if (error.value) {
    throw createDefaultError(error);
  }

  onMounted(gameStore.initGameWindow);
</script>
