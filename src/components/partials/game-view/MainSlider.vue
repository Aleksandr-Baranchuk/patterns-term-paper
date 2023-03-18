<template>
  <swiper
    :slides-per-view="1"
    :centered-slides="false"
    :slides-per-group-skip="1"
    :speed="1000"
    class="main-slider w-screen h-screen relative"
    effect="gl"
    :hash-navigation="{
      watchState: true,
      replaceState: true
    }"
    :modules="modules"
    @before-init="onBeforeInit">
    <swiper-slide
      v-for="item in gameWindows"
      :key="item.id"
      :data-hash="item.id">
      <img
        class="swiper-gl-image block w-full"
        :src="item.image"
        alt="image" />
    </swiper-slide>
    <template #container-end>
      <main-slide-content />
    </template>
  </swiper>
</template>

<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { HashNavigation } from 'swiper';
  import 'swiper/css';

  import SwiperGL from '@/assets/libs/gl/swiper-gl.esm.js';
  import '@/assets/libs/gl/swiper-gl.scss';
  import MainSlideContent from '@/components/partials/game-view/MainSlideContent.vue';
  import useGameStore from '~/store/game';

  const gameStore = useGameStore();
  const modules = [SwiperGL, HashNavigation];

  const gameWindows = computed(() => gameStore.gameWindows);
  const onBeforeInit = (swiper: any) => {
    swiper.params.gl.shader = 'polygons-wind';
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
