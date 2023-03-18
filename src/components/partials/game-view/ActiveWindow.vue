<script lang="ts">
  import useUserStore from '~/store/user';
  import SetupWindow from '~/components/partials/game-view/SetupWindow.vue';
  import MainSlider from '~/components/partials/game-view/MainSlider.vue';
  import useGameStore from '~/store/game';
  import GameOverWindow from '~/components/partials/game-view/GameOverWindow.vue';

  export default {
    setup() {
      const userStore = useUserStore();
      const gameStore = useGameStore();
      return () => {
        if (gameStore.gameOverData) {
          return h(GameOverWindow);
        }

        if (!userStore.userName) {
          return h(SetupWindow);
        }
        return h(MainSlider);
      };
    }
  };
</script>
