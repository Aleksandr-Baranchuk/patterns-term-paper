import { defineStore } from 'pinia';
import { GameOver, GameWindow } from '~/types';
import gameWindowsPlot from '~/mock/gameWindowsPlot';

const useGameStore = defineStore(
  'gameStore',
  () => {
    const gameWindows = ref<GameWindow[]>(gameWindowsPlot);
    const activeSlideId = ref<string>('');
    const gameOverData = ref<GameOver>();
    const currentDialogIndex = ref(0);
    const reset = () => {
      activeSlideId.value = '';
      gameOverData.value = undefined;
      currentDialogIndex.value = 0;
    };

    const activeSlideIndex = computed<number>(() => useFindIndex(gameWindows.value, { id: activeSlideId.value }));
    const currentGameWindow = computed<GameWindow>(() => {
      return gameWindows.value[activeSlideIndex.value] || gameWindows.value[0];
    });

    const currentWindowDialogs = computed(() => currentGameWindow.value.dialogs);
    const isLastStepDialogs = computed(() => !currentWindowDialogs.value?.[currentDialogIndex.value + 1]);
    const activeDialog = computed(() => currentWindowDialogs.value?.[currentDialogIndex.value]);

    const setDialogIndex = (index: number) => {
      currentDialogIndex.value = index;
    };

    const nextDialog = () => {
      if (!isLastStepDialogs.value) {
        setDialogIndex(currentDialogIndex.value + 1);
      }
    };

    const setActiveSlideId = (gameWindowId?: string) => {
      if (gameWindowId) {
        activeSlideId.value = gameWindowId;
        setDialogIndex(0);
      }

      return activeSlideIndex.value;
    };

    const onGameOver = (payload: GameOver) => {
      gameOverData.value = payload;
    };

    return {
      activeSlideId,
      activeSlideIndex,
      currentDialogIndex,
      gameWindows,
      currentGameWindow,
      gameOverData,
      activeDialog,
      isLastStepDialogs,

      reset,
      setActiveSlideId,
      nextDialog,
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
