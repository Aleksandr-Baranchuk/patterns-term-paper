import { defineStore } from 'pinia';
import { GameOver, GameWindow } from '~/types';
import gameWindowsPlot from '~/mock/gameWindowsPlot';

const useGameStore = defineStore(
  'gameStore',
  () => {
    const gameWindows = ref<GameWindow[]>(gameWindowsPlot);
    const activeSlideId = ref<string>('');
    const gameOverData = ref<GameOver>();

    const reset = () => {
      activeSlideId.value = '';
      gameOverData.value = undefined;
    };

    const activeSlideIndex = computed<number>(() => useFindIndex(gameWindows.value, { id: activeSlideId.value }));
    const currentGameWindow = computed<GameWindow>(() => {
      return gameWindows.value[activeSlideIndex.value] || gameWindows.value[0];
    });
    const setActiveSlideId = (gameWindowId?: string) => {
      if (gameWindowId) {
        activeSlideId.value = gameWindowId;
      }

      return activeSlideIndex.value;
    };

    const onGameOver = (payload: GameOver) => {
      gameOverData.value = payload;
    };

    return {
      activeSlideId,
      activeSlideIndex,
      gameWindows,
      currentGameWindow,
      gameOverData,

      reset,
      setActiveSlideId,
      onGameOver
    };
  },
  {
    persist: {
      paths: ['activeSlideId', 'gameOverData']
    }
  }
);

export default useGameStore;
