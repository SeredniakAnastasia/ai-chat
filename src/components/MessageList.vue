<template>
  <v-container fluid class="fill-height d-flex flex-column">
    <div ref="chatContainer" class="w-100 overflow-y-auto">
      <Message
        v-for="message in chats[id]?.messages"
        :key="message.id"
        :text="message.content"
        :type="message.role"
      />
    </div>
  </v-container>
</template>

<script lang="ts" setup>
  import Message from '@/components/Message.vue';
  import { useChatStore } from '@/stores/app';
  import { useGoTo } from 'vuetify';

  const goTo = useGoTo();
  const { chats } = useChatStore();
  const route = useRoute();
  const id = computed<string>(() => route.params.id);

  const chatContainer = ref<HTMLElement | null>(null);
  const scrollToLastMessage = (duration: number = 0): void => {
    if (chatContainer.value) {
      goTo(chatContainer.value.scrollHeight, { container: '#chatContainer', duration });
    }
  };

  watch(
    () => chats[id.value]?.messages.length,
    () => nextTick(() => scrollToLastMessage(500))
  );

  onMounted(() => requestAnimationFrame(() => scrollToLastMessage()));
</script>
