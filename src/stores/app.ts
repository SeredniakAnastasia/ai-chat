import { defineStore } from 'pinia';
import type { ChatStoreInterface, MessageInterface } from '@/types';

export const useChatStore = defineStore('chat', () => {
  const chats: ChatStoreInterface = reactive(JSON.parse(localStorage.getItem('chats') || '{}'));
  const hasChats = computed<boolean>(() => Object.keys(chats).length > 0);

  const saveToLocalStorage = () => {
    localStorage.setItem('chats', JSON.stringify(chats));
  };
  const createNewChat = (name: string): string => {
    const newChatId = crypto.randomUUID();
    chats[newChatId] = {
      name,
      messages: [],
    };
    saveToLocalStorage();
    return newChatId;
  };
  const addMessageToChat = (id: string, message: MessageInterface) => {
    chats[id].messages.push({
      id: crypto.randomUUID(),
      ...message,
    });
    saveToLocalStorage();
  };

  return { chats, hasChats, createNewChat, addMessageToChat };
});
