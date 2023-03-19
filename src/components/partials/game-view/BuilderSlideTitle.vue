<template>
  <render-messages
    :key="renderKey"
    class="text-3xl mb-12 font-bold text-white"
    :class="activeMessageClasses"
    :messages="activeMessage" />
</template>

<script setup lang="ts">
  import useGameStore from '~/store/game';
  import RenderMessages from '~/components/partials/game-view/RenderMessages.vue';

  const gameStore = useGameStore();
  const activeMessage = computed(() => gameStore.activeDialog || gameStore.currentGameWindow.title);
  const renderKey = computed(() =>
    gameStore.activeDialog ? gameStore.currentDialogIndex : gameStore.currentGameWindow.id
  );
  const activeMessageClasses = computed(() => gameStore.currentGameWindow.textStyle);
</script>
