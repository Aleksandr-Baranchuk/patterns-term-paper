import { defineStore } from 'pinia';
import gameViewItems from '~/mock/gameViewItems';

const useGameStore = defineStore('gameStore', () => {
  const activeSlideIndex = ref(0);
  const currentSlideData = computed(() => {
    return gameViewItems[activeSlideIndex.value];
  });
  const setActiveSlideIndex = (newIndex: number) => {
    activeSlideIndex.value = newIndex;
  };

  return {
    activeSlideIndex,
    currentSlideData,

    setActiveSlideIndex
  };
});

export default useGameStore;
