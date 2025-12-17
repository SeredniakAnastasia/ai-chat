<template>
  <v-navigation-drawer v-model="isNavOpen">
    <template v-for="[id, chat] in Object.entries(chats)" :key="id">
      <v-list-item
        link
        :title="chat.name"
        :subtitle="truncate(chat?.messages[chat.messages.length - 1]?.content)"
        :to="{ name: 'chat', params: { id } }"
        class="pa-4"
      />
      <v-divider />
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import { useChatStore } from '@/stores/app';
  import { useUiStore } from '@/stores/uiStore';

  const { chats } = useChatStore();
  const ui = useUiStore();
  const { isNavOpen } = storeToRefs(ui);

  const truncate = (message: string | undefined, max: number = 50): string => {
    if (!message) return '';
    return message.length > max ? message.slice(0, max) + '...' : message;
  };
</script>
