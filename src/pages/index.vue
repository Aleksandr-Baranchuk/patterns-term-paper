<template>
  <div>
    <error-alert
      v-if="error"
      :message="error" />
    <nuxt-error-boundary>
      <template #default>
        <client-only>
          <template #default>
            <main-slider />
          </template>
          <template #fallback>
            <base-loader class="fixed" />
          </template>
        </client-only>
        <audio
          ref="audioRef"
          class="hidden" />
      </template>
      <template #error="{ error }">
        <error-alert :error="error" />
      </template>
    </nuxt-error-boundary>
  </div>
</template>
<script setup lang="ts">
  import { useMediaControls } from '@vueuse/core';
  import MainSlider from '~/components/game-view/MainSlider.vue';
  import BaseLoader from '~/components/ui/BaseLoader.vue';
  import useGameStore from '~/store/game';
  import ErrorAlert from '~/components/ui/ErrorAlert.vue';
  import { useEventListener } from '#imports';

  const audioRef = ref();

  const gameStore = useGameStore();

  const { error } = await gameStore.fetchGameWindows();
  const { playing, volume } = useMediaControls(audioRef, {
    src: '/assets/audio/X2Download.mp3'
  });

  useEventListener('click', () => {
    if (!playing.value) {
      volume.value = 0.3;
      audioRef.value.play();
    }
  });
  onMounted(gameStore.initGameWindow);
</script>
