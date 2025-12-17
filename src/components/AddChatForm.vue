<template>
  <base-form v-model="chatName" label="Chat name" button-text="Create" @submit="handleSubmit" />
</template>

<script lang="ts" setup>
  import { Ref, defineEmits } from 'vue';
  import BaseForm from '@/components/BaseForm.vue';
  import { useChatStore } from '@/stores/app';

  const { createNewChat } = useChatStore();
  const router = useRouter();

  const chatName: Ref<string> = ref('');

  const emit = defineEmits<{
    (e: 'onClose'): void;
  }>();

  const handleSubmit = (): void => {
    const chatId: string = createNewChat(chatName.value);
    router.push({ name: 'chat', params: { id: chatId } });
    emit('onClose');
  };
</script>
