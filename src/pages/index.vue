<template>
  <div class="flex flex-col items-center justify-center flex-1">
    <client-only>
      <template #default>
        <active-window />
      </template>
      <template #fallback>
        <base-loader class="fixed" />
      </template>
    </client-only>
  </div>
</template>
<script setup lang="ts">
  import BaseLoader from '~/components/ui/BaseLoader.vue';
  import ActiveWindow from '~/components/partials/game-view/ActiveWindow.vue';
</script>
