<template>
  <ul
    :class="actionStyle"
    class="flex flex-col flex-wrap gap-6">
    <li v-if="showActionDialog">
      <base-button-slide @click="onNextDialog"> Далі ... </base-button-slide>
    </li>
    <template v-else-if="actionAnswers && actionAnswers.length">
      <li
        v-for="answer in actionAnswers"
        :key="answer.text">
        <answer-button :answer="answer" />
      </li>
    </template>
    <li v-else-if="showActionNextWindow">
      <base-button-slide @click="onNextWindow"> Піти далі ... </base-button-slide>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { useSwiper } from 'swiper/vue';
  import AnswerButton from '~/components/partials/game-view/AnswerButton.vue';
  import useGameStore from '~/store/game';
  import BaseButtonSlide from '~/components/ui/BaseButtonSlide.vue';

  const swiper = useSwiper();
  const gameStore = useGameStore();

  const actionStyle = computed(() => gameStore.currentGameWindow.actionStyle);
  const actionAnswers = computed(() => gameStore.currentGameWindow.answers);
  const showActionDialog = computed(() => !!gameStore.activeDialog && !gameStore.isLastStepDialogs);
  const showActionNextWindow = computed(() => !!gameStore.currentGameWindow.gameWindowNextId);
  const onNextDialog = () => gameStore.nextDialog();
  const onNextWindow = () => {
    const nextIndex = gameStore.setActiveSlideId(gameStore.currentGameWindow.gameWindowNextId);
    swiper.value.slideTo(nextIndex);
  };
</script>
