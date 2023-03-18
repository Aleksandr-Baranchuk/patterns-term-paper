<script lang="ts">
  import useUserStore from '~/store/user';
  import SetupWindow from '~/components/partials/game-view/SetupWindow.vue';
  import useGameStore from '~/store/game';
  import MainSlider from '~/components/partials/game-view/MainSlider.vue';

  export default {
    setup() {
      const userStore = useUserStore();
      const gameStore = useGameStore();
      return () => {
        if (!userStore.userName) {
          return h(SetupWindow);
        }
        gameStore.initGameWindow();
        return h(MainSlider);
      };
    }
  };
</script>
