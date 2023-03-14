<template>
  <div class="absolute bottom-8 left-6 z-10">
    <Transition
      name="bounce"
      mode="out-in">
      <h2
        :key="currentSlideData.content.title"
        class="text-white text-3xl font-bold shadow-black"
        :class="currentSlideData.content.classes">
        {{ currentSlideData.content.title }}
      </h2>
    </Transition>
    <audio
      v-if="currentSlideData.content.audio"
      class="hidden"
      autoplay
      loop
      :src="currentSlideData.content.audio" />
    <div class="flex flex-wrap gap-3">
      <a
        v-for="{ text, to } in currentSlideData.answers"
        :key="text + to"
        class="btn btn-primary"
        :href="`#${to}`">
        {{ text }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
  import useGameStore from '~/store/game';

  const gameStore = useGameStore();
  const currentSlideData = computed(() => gameStore.currentSlideData);
</script>
