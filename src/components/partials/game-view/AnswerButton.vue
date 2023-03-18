<template>
  <button
    class="btn btn-accent max-w-auto h-auto btn-lg"
    @click="onClick">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
  import { useSwiper } from 'swiper/vue';
  import { GameAnswer } from '~/types';
  import usePrepareMessageWithName from '~/composables/usePrepareMessageWithName';
  import useGameStore from '~/store/game';
  import useUserStore from '~/store/user';

  const props = defineProps<{ answer: GameAnswer }>();

  const swiper = useSwiper();
  const gameStore = useGameStore();
  const userStore = useUserStore();
  const text = usePrepareMessageWithName(computed(() => props.answer.text));
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
      userStore.setMana(answer.setMoney);
    }
    if (!isNil(answer.setHpPotion)) {
      userStore.setMana(answer.setHpPotion);
    }

    if (!isNil(answer.gameWindowNextId)) {
      const nextIndex = gameStore.setActiveSlideId(answer.gameWindowNextId);
      swiper.value.slideTo(nextIndex);
    }
  };
</script>
