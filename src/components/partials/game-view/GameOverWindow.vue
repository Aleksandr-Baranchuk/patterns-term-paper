<template>
  <img
    class="absolute inset-0 w-full h-full object-cover object-center"
    :src="activeImage"
    alt="game-over" />
  <div
    class="relative z-10 p-4 max-w-3xl text-center text-white"
    :class="textStyle">
    <render-messages
      v-if="text"
      class="text-3xl mb-12 font-bold"
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

  const activeImage = computed(() => gameStore.gameOverData?.image);

  const textStyle = computed(() => gameStore.gameOverData?.textStyle);

  const onRestartGame = () => {
    gameStore.reset();
    userStore.reset();
  };
</script>
