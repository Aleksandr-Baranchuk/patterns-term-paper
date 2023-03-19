<template>
  <component
    :is="tag"
    class="shadow-black drop-shadow-2xl">
    <template v-if="isStringMassages">{{ prepareMassages }}</template>
    <template v-else>
      <span
        v-for="message in prepareMassages"
        :key="message">
        {{ message }}
        <br />
      </span>
    </template>
  </component>
</template>
<script lang="ts" setup>
  import usePrepareMessageWithName from '~/composables/usePrepareMessageWithName';

  const props = withDefaults(defineProps<{ messages: string | string[]; tag?: string }>(), {
    tag: 'p'
  });
  const isStringMassages = computed(() => isString(props.messages));
  const prepareMassages = usePrepareMessageWithName(props, 'messages');
</script>
