<template>
  <div class="absolute bottom-8 inset-x-6 z-10">
    <Transition
      name="bounce"
      mode="out-in">
      <h2
        :key="currentGameWindow.id"
        class="text-white text-3xl font-bold shadow-black">
        {{ currentGameWindow.title }}
      </h2>
    </Transition>
    <div class="flex flex-wrap gap-3">
      <a
        v-for="{ text, id, gameWindowNextId } in currentGameWindow.answers"
        :key="id"
        class="btn btn-primary max-w-full h-auto"
        :href="`#${gameWindowNextId}`"
        @click="onSetActiveSlideId(gameWindowNextId)">
        {{ text }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { gameWindow } from '@prisma/client';
  import useGameStore from '~/store/game';

  const gameStore = useGameStore();
  const currentGameWindow = computed<gameWindow>(() => gameStore.currentGameWindow);

  const onSetActiveSlideId = (gameWindowId: number) => {
    gameStore.setActiveSlideId(gameWindowId);
  };
</script>
