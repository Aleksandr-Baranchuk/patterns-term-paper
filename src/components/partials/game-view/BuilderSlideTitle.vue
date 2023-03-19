<template>
  <p
    :key="renderKey"
    class="text-3xl font-bold shadow-black mb-12"
    :class="activeMessageClasses">
    <template v-if="isStringMassages">{{ prepareMassages }}</template>
    <template v-else>
      <span
        v-for="message in prepareMassages"
        :key="message">
        {{ message }}
        <br />
      </span>
    </template>
  </p>
</template>

<script setup lang="ts">
  import usePrepareMessageWithName from '~/composables/usePrepareMessageWithName';
  import useGameStore from '~/store/game';

  const gameStore = useGameStore();
  const activeMessage = computed(() => gameStore.activeDialog || gameStore.currentGameWindow.title);
  const renderKey = computed(() =>
    gameStore.activeDialog ? gameStore.currentDialogIndex : gameStore.currentGameWindow.id
  );
  const activeMessageClasses = computed(() => gameStore.currentGameWindow.textStyle);
  const isStringMassages = computed(() => isString(activeMessage.value));
  const prepareMassages = usePrepareMessageWithName(activeMessage);
</script>
