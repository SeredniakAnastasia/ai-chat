import type { ChatRouteParams } from '@/types';
import { MessageRoleType } from '@/types';
import { sendMessage } from '@/api';
import type { Ref } from 'vue';
import { useChatStore } from '@/stores/app';
import { useUiStore } from '@/stores/uiStore';

export function useFetchResponse(message: Ref<string>) {
  const { chats, addMessageToChat } = useChatStore();
  const ui = useUiStore();
  const route = useRoute();

  const isLoading: Ref<boolean> = ref(false);
  const currentChatId = computed<string>(() => (route.params as ChatRouteParams).id);

  const handleSubmit = async (): Promise<void> => {
    addMessageToChat(currentChatId.value, { role: MessageRoleType.USER, content: message.value });
    try {
      isLoading.value = true;
      const chat = chats[currentChatId.value];
      if (!chat) return;

      const res = await sendMessage(chat.messages);

      const assistantMessage = res.data?.choices?.[0]?.message;
      if (!assistantMessage) return;

      addMessageToChat(currentChatId.value, assistantMessage);
    } catch (e) {
      ui.openToast('Something went wrong. Try later.');
    } finally {
      isLoading.value = false;
    }
  };

  return { handleSubmit, isLoading };
}
