import { MessageRoleType } from '@/types';
import { sendMessage } from '@/api';
import type { Ref } from 'vue';
import { useChatStore } from '@/stores/app';

export function useFetchResponse(message: Ref<string>) {
  const { chats, addMessageToChat } = useChatStore();
  const route = useRoute();

  const isLoading: Ref<boolean> = ref(false);
  const currentChatId = computed<string>(() => route.params.id);

  const handleSubmit = async (): Promise<void> => {
    addMessageToChat(currentChatId.value, { role: MessageRoleType.USER, content: message.value });
    try {
      isLoading.value = true;
      const res = await sendMessage(chats[currentChatId.value].messages);
      addMessageToChat(currentChatId.value, res.data.choices[0].message);
    } catch (e) {
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  };

  return { handleSubmit, isLoading };
}
