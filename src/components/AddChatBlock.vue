<template>
  <v-btn
    variant="outlined"
    append-icon="mdi-plus"
    text="Chat"
    @click="() => handleSubmit()"
  ></v-btn>
  <v-btn
    variant="outlined"
    append-icon="mdi-plus"
    text="Anonymous chat"
    @click="() => handleSubmit(true)"
  ></v-btn>
</template>

<script lang="ts" setup>
  import { useChatStore } from '@/stores/app';

  const { createNewChat } = useChatStore();
  const router = useRouter();

  const handleSubmit = (isAnonymous: boolean = false): void => {
    const chatId: string = createNewChat('New Chat', isAnonymous);
    router.push(`/chat/${chatId}`);
  };
</script>
