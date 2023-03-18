<template>
  <img
    class="absolute inset-0 w-full h-full object-cover object-center"
    :src="activeImage"
    alt="game-over" />
  <div
    class="relative z-10 p-4 max-w-3xl text-center"
    :class="contentStyleWithType">
    <p class="text-3xl mb-4 text-white drop-shadow-2xl">{{ text }}</p>
    <button
      class="btn btn-accent"
      @click="onRestartGame">
      почати спочатку
    </button>
  </div>
</template>

<script setup lang="ts">
  import useGameStore from '~/store/game';
  import usePrepareMessageWithName from '~/composables/usePrepareMessageWithName';
  import useUserStore from '~/store/user';

  const gameStore = useGameStore();
  const userStore = useUserStore();

  const text = usePrepareMessageWithName(computed(() => gameStore.gameOverData?.text || ''));

  const activeImage = computed(() => {
    const images = {
      success: '',
      failure: 'game-over-failure.jpg',
      neutrality: ''
    };
    return '/assets/images/' + images[gameStore.gameOverData?.type || 'failure'];
  });

  const contentStyleWithType = computed(() => {
    const classes = {
      success: '',
      failure: 'relative top-32',
      neutrality: ''
    };

    return classes[gameStore.gameOverData?.type || 'failure'];
  });

  const onRestartGame = () => {
    gameStore.reset();
    userStore.reset();
  };
</script>
