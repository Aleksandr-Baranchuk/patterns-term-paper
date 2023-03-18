<template>
  <form @submit.prevent="onSubmit">
    <input
      v-model="fieldName"
      type="text"
      placeholder="Enter Your name"
      required
      class="input input-bordered w-full max-w-xs mb-3" />
    <div class="text-center">
      <button
        type="submit"
        :disabled="!fieldName"
        class="btn btn-glass">
        Почати гру
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
  import useUserStore from '~/store/user';

  const userStore = useUserStore();
  const fieldName = ref('');
  const onSubmit = () => {
    userStore.initGame(fieldName.value);
  };
</script>
