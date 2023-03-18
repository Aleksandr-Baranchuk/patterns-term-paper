<template>
  <div class="flex flex-col min-h-screen">
    <nuxt-loading-indicator />
    <app-header v-if="userName" />
    <main class="flex flex-col flex-1">
      <nuxt-error-boundary>
        <template #default>
          <slot />
        </template>
        <template #error="{ error }">
          <error-alert :error="error" />
        </template>
      </nuxt-error-boundary>
    </main>
  </div>
</template>

<script lang="ts" setup>
  import ErrorAlert from '~/components/ui/ErrorAlert.vue';
  import useUserStore from '~/store/user';
  import AppHeader from '~/components/partials/AppHeader.vue';

  const userStore = useUserStore();

  const userName = computed(() => userStore.userName);
</script>
