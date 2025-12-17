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
  import { truncate } from '@/utils/index';

  const { chats } = useChatStore();
  const ui = useUiStore();
  const { isNavOpen } = storeToRefs(ui);
</script>
