<template>
  <v-footer app class="d-flex flex-column align-start py-8">
    <p v-if="isLoading" class="opacity-60 mb-2">Stacy is typing ...</p>

    <v-form @submit.prevent="onSubmit" class="d-flex align-center ga-2 w-100">
      <v-text-field
        v-model="message"
        label="Enter a message"
        class="'flex-grow-1'"
        hide-details="auto"
      />
      <v-btn type="submit" :disabled="!message"> Send </v-btn>
    </v-form>
  </v-footer>
</template>

<script lang="ts" setup>
  import type { Ref } from 'vue';
  import type { VForm } from 'vuetify/components';
  import { ref } from 'vue';
  import { useFetchResponse } from '@/composables/useFetchResponse';

  const message: Ref<string> = ref('');

  const { isLoading, handleSubmit } = useFetchResponse(message);

  const onSubmit = () => {
    if (!message.value) return;
    handleSubmit();
    message.value = '';
  };
</script>
