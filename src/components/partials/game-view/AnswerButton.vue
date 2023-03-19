<template>
  <base-button-slide
    :disabled="disableAnswer"
    @click="onClick">
    <render-messages
      tag="span"
      :messages="text" />
  </base-button-slide>
</template>

<script setup lang="ts">
  import { useSwiper } from 'swiper/vue';
  import { GameAnswer } from '~/types';
  import usePrepareMessageWithName from '~/composables/usePrepareMessageWithName';
  import useGameStore from '~/store/game';
  import useUserStore from '~/store/user';
  import BaseButtonSlide from '~/components/ui/BaseButtonSlide.vue';
  import RenderMessages from '~/components/partials/game-view/RenderMessages.vue';

  const props = defineProps<{ answer: GameAnswer }>();

  const swiper = useSwiper();
  const gameStore = useGameStore();
  const userStore = useUserStore();
  const text = usePrepareMessageWithName(computed(() => props.answer.text));
  const lackOfHpPoint = computed(() => {
    if (isNil(props.answer.setHpPotion)) {
      return false;
    }
    return userStore.hpPotion + props.answer.setHpPotion < 0;
  });

  const lackOfMana = computed(() => {
    if (isNil(props.answer.setMana)) {
      return false;
    }
    return userStore.mana + props.answer.setMana < 0;
  });

  const lackOfMoney = computed(() => {
    if (isNil(props.answer.setMoney)) {
      return false;
    }
    return userStore.money + props.answer.setMoney < 0;
  });

  const disableAnswer = computed(() => {
    return lackOfHpPoint.value || lackOfMana.value || lackOfMoney.value;
  });
  const onClick = () => {
    const answer = props.answer;

    if (!isNil(answer.gameOver)) {
      gameStore.onGameOver(answer.gameOver);
      return;
    }

    if (!isNil(answer.setHp)) {
      const lived = userStore.setHp(answer.setHp);
      if (!lived) {
        return;
      }
    }
    if (!isNil(answer.setMana)) {
      userStore.setMana(answer.setMana);
    }
    if (!isNil(answer.setMoney)) {
      userStore.setMoney(answer.setMoney);
    }
    if (!isNil(answer.setHpPotion)) {
      userStore.setHpPotion(answer.setHpPotion);
    }

    if (!isNil(answer.gameWindowNextId)) {
      const nextIndex = gameStore.setActiveSlideId(answer.gameWindowNextId);
      swiper.value.slideTo(nextIndex);
    }
  };
</script>
