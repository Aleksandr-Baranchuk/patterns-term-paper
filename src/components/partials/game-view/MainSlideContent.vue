<template>
  <div
    class="absolute bottom-8 inset-x-6 z-10 flex flex-col"
    :class="currentGameWindow.contentStyle">
    <transition-scale>
      <builder-slide-title />
    </transition-scale>
    <builder-slide-actions />
  </div>
</template>

<script setup lang="ts">
  import useGameStore from '~/store/game';
  import { GameWindow } from '~/types';
  import BuilderSlideTitle from '~/components/partials/game-view/BuilderSlideTitle.vue';
  import BuilderSlideActions from '~/components/partials/game-view/BuilderSlideActions.vue';
  const gameStore = useGameStore();

  const currentGameWindow = computed<GameWindow>(() => gameStore.currentGameWindow);
</script>
