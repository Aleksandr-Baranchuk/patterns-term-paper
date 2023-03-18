<template>
  <div
    class="absolute bottom-8 inset-x-6 z-10 flex flex-col"
    :class="currentGameWindow.contentStyle">
    <Transition
      name="bounce"
      mode="out-in">
      <h2
        :key="currentGameWindow.id"
        :class="currentGameWindow.textStyle"
        class="text-3xl font-bold shadow-black mb-12">
        <template v-if="isArrayTitle">
          <span
            v-for="item in title"
            :key="item"
            class="block mb-2">
            {{ item }}
          </span>
        </template>
        <span v-else>{{ title }}</span>
      </h2>
    </Transition>

    <ul
      :class="currentGameWindow.actionStyle"
      class="flex flex-col flex-wrap gap-6">
      <template v-if="currentGameWindow.answers.length">
        <li
          v-for="answer in currentGameWindow.answers"
          :key="answer.text">
          <answer-button :answer="answer" />
        </li>
      </template>
      <li v-if="currentGameWindow.gameWindowNextId">
        <button
          v-if="currentGameWindow.gameWindowNextId"
          class="btn btn-accent max-w-full h-auto"
          @click="onNextWindow">
          далі ...
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { useSwiper } from 'swiper/vue';
  import useGameStore from '~/store/game';
  import { GameWindow } from '~/types';
  import usePrepareMessageWithName from '~/composables/usePrepareMessageWithName';
  import AnswerButton from '~/components/partials/game-view/AnswerButton.vue';

  const swiper = useSwiper();
  const gameStore = useGameStore();

  const currentGameWindow = computed<GameWindow>(() => gameStore.currentGameWindow);
  const title = usePrepareMessageWithName(computed(() => currentGameWindow.value.title));
  const isArrayTitle = computed(() => isArray(currentGameWindow.value.title));
  const onNextWindow = () => {
    const nextIndex = gameStore.setActiveSlideId(currentGameWindow.value.gameWindowNextId);
    swiper.value.slideTo(nextIndex);
  };
</script>
