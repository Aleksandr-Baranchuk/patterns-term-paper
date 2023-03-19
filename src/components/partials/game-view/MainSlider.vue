<template>
  <div>
    <game-toolbar />
    <swiper
      :slides-per-view="1"
      :slides-per-group-skip="1"
      :allow-touch-move="false"
      :speed="1000"
      class="main-slider w-screen h-screen relative"
      :modules="modules"
      effect="gl"
      @before-init="onBeforeInit"
      @init="onInit">
      <swiper-slide
        v-for="item in gameWindows"
        :key="item.id">
        <img
          class="swiper-gl-image block w-full"
          :src="item.image"
          alt="image" />
      </swiper-slide>
      <template #container-end>
        <main-slide-content />
      </template>
    </swiper>
  </div>
</template>

<script setup lang="ts">
  import type { Swiper as SwiperClass } from 'swiper/types';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  import SwiperGL from '@/assets/libs/gl/swiper-gl.esm.js';
  import '@/assets/libs/gl/swiper-gl.scss';
  import MainSlideContent from '@/components/partials/game-view/MainSlideContent.vue';
  import useGameStore from '~/store/game';
  import GameToolbar from '~/components/partials/game-view/GameToolbar.vue';

  const gameStore = useGameStore();
  const modules = [SwiperGL];

  const gameWindows = computed(() => gameStore.gameWindows);
  const onBeforeInit = (swiper: any) => {
    swiper.params.gl.shader = 'polygons-wind';
  };

  const onInit = (swiper: SwiperClass) => {
    if (swiper.activeIndex !== gameStore.activeSlideIndex) {
      swiper.slideTo(gameStore.activeSlideIndex);
    }
  };
</script>

<style lang="scss" scoped>
  ::v-deep(.main-slider) {
    .swiper {
      width: 100%;
      height: 100%;
      &-slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
      }
    }
  }
</style>
