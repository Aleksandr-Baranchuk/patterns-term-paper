import { defineStore } from 'pinia';
import { GameWindow } from '~/types';

const useGameStore = defineStore('gameStore', () => {
  const gameWindows = ref<GameWindow[]>([]);
  const activeSlideId = ref<number>();
  const route = useRoute();

  const activeSlideIndex = computed<number>(() => useFindIndex(gameWindows.value, { id: activeSlideId.value }));
  const currentGameWindow = computed<GameWindow | Object>(() => {
    if (!gameWindows.value.length) {
      return {};
    }
    return gameWindows.value[activeSlideIndex.value] || gameWindows.value[0];
  });
  const setActiveSlideId = (gameWindowId: number) => {
    activeSlideId.value = gameWindowId;
  };

  const fetchGameWindows = async () => {
    const res = await useFetch<GameWindow[]>('/api/game-windows');
    if (!res.error.value && res.data.value) {
      gameWindows.value = res.data.value;
    }
    return res;
  };

  const initGameWindow = () => {
    if (!gameWindows.value.length) {
      return;
    }
    if (route.hash) {
      activeSlideId.value = parseInt(route.hash.replace('#', ''));
      return;
    }
    activeSlideId.value = gameWindows.value[0].id;
  };

  return {
    gameWindows,
    currentGameWindow,

    setActiveSlideId,
    fetchGameWindows,
    initGameWindow
  };
});

export default useGameStore;
