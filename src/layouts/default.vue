<template>
  <div class="flex flex-col min-h-screen">
    <nuxt-loading-indicator />
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
</script>
