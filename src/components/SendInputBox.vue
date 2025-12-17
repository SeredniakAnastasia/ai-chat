<template>
  <v-footer app class="d-flex flex-column align-start py-8">
    <p v-if="isLoading" class="opacity-60 mb-2">Stacy is typing ...</p>
    <base-form
      v-model="message"
      label="Enter a message"
      button-text="Send"
      @submit="handleSubmit"
      horizontal
    />
  </v-footer>
</template>

<script lang="ts" setup>
  import type { Ref } from 'vue';
  import BaseForm from '@/components/BaseForm.vue';
  import { useFetchResponse } from '@/composables/useFetchResponse';

  const message: Ref<string> = ref('');

  const { isLoading, handleSubmit } = useFetchResponse(message);
</script>
