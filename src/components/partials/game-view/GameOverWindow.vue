<template>
  <img
    class="absolute inset-0 w-full h-full object-cover object-center"
    :src="activeImage"
    alt="game-over" />
  <div
    class="relative z-10 p-4 max-w-3xl text-center"
    :class="contentStyleWithType">
    <render-messages
      v-if="text"
      :messages="text" />
    <button
      class="btn btn-accent"
      @click="onRestartGame">
      почати спочатку
    </button>
  </div>
</template>

<script setup lang="ts">
  import useGameStore from '~/store/game';
  import useUserStore from '~/store/user';
  import RenderMessages from '~/components/partials/game-view/RenderMessages.vue';

  const gameStore = useGameStore();
  const userStore = useUserStore();

  const text = computed(() => gameStore.gameOverData?.text);

  const activeImage = computed(() => {
    if (gameStore.gameOverData?.images) {
      return gameStore.gameOverData.images;
    }
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
