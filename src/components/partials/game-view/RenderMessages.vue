<template>
  <p class="text-3xl font-bold shadow-black mb-12 drop-shadow-2xl">
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
<script lang="ts" setup>
  import usePrepareMessageWithName from '~/composables/usePrepareMessageWithName';

  const props = defineProps<{ messages: string | string[] }>();
  const isStringMassages = computed(() => isString(props.messages));
  const prepareMassages = usePrepareMessageWithName(props, 'messages');
</script>
