<template>
  <v-container fluid class="fill-height d-flex flex-column justify-center align-center">
    <h2 class="text-h4 font-weight-medium mb-2">
      {{ headerText }}
    </h2>
    <p class="text-grey">Click the button in the top-left corner to create the new one</p>
  </v-container>
</template>

<script lang="ts" setup>
  import { useChatStore } from '@/stores/app';

  const chatStore = useChatStore();
  const { hasChats } = storeToRefs(chatStore);

  const headerText = computed<string>(() =>
    hasChats ? 'Choose any chat from the sidebar on the left' : 'Create your first chat'
  );
</script>
