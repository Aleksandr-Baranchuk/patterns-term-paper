<template>
  <div class="m-4">
    <div class="alert alert-error shadow-lg">
      <div>
        <Icon
          name="mdi:alert-circle"
          size="24" />
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{ error: any }>();

  const errorMessage = computed(() => getMessageErrorByResponse(props));
</script>
