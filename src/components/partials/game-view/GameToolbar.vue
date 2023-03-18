<template>
  <header class="text-white fixed inset-x-0 top-0 z-20 bg-black px-4 py-2 flex flex-wrap justify-center gap-4 items-center">
    <span>
      <Icon
        name="mdi:cards-heart"
        class="text-red-700 mr-1"
        size="24" />
      <span>{{ infoBarItems.hp }}</span>
    </span>
    <span>
      <Icon
        name="bi:magic"
        class="text-blue-600 mr-1"
        size="24" />
      <span>{{ infoBarItems.mana }}</span>
    </span>
    <span>
      <Icon
        name="wpf:coins"
        class="text-yellow-500 mr-1"
        size="24" />
      <span>{{ infoBarItems.money }}</span>
    </span>
    <span>
      <Icon
        name="game-icons:health-potion"
        class="text-green-400 mr-1"
        size="24" />
      <span>{{ infoBarItems.hpPotion }}</span>
    </span>
  </header>
</template>

<script lang="ts" setup>
  import useUserStore from '~/store/user';

  const userStore = useUserStore();
  const infoBarItems = computed(() => {
    return {
      hp: userStore.hp,
      hpPotion: userStore.hpPotion,
      mana: userStore.mana,
      money: userStore.money
    };
  });
</script>
