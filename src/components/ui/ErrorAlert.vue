<template>
  <div class="m-4">
    <div class="alert alert-error shadow-lg">
      <div>
        <Icon
          name="mdi:alert-circle"
          size="24" />
        <p>{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{ error: any }>();
</script>
