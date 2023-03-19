<template>
  <div
    class="absolute bottom-8 inset-x-6 z-10 flex flex-col"
    :class="contentStyle">
    <transition-scale>
      <builder-slide-title />
    </transition-scale>
    <builder-slide-actions />
  </div>
</template>

<script setup lang="ts">
  import useGameStore from '~/store/game';
  import BuilderSlideTitle from '~/components/partials/game-view/BuilderSlideTitle.vue';
  import BuilderSlideActions from '~/components/partials/game-view/BuilderSlideActions.vue';
  const gameStore = useGameStore();

  const contentStyle = computed(() => gameStore.currentGameWindow.contentStyle);
</script>
