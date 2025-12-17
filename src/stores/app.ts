import { defineStore } from 'pinia';
import type { ChatStoreInterface, MessageInterface } from '@/types';

export const useChatStore = defineStore('chat', () => {
  const chats: ChatStoreInterface = reactive(JSON.parse(localStorage.getItem('chats') || '{}'));
  const nonAnonymousChats = computed<ChatStoreInterface>(() =>
    Object.fromEntries(Object.entries(chats).filter(([_, chat]) => !chat.isAnonymous))
  );
  const hasChats = computed<boolean>(() => Object.keys(chats).length > 0);

  const saveToLocalStorage = () => {
    localStorage.setItem('chats', JSON.stringify(nonAnonymousChats.value));
  };
  const createNewChat = (name: string, isAnonymous: boolean = false): string => {
    const newChatId = crypto.randomUUID();
    chats[newChatId] = {
      name,
      isAnonymous,
      messages: [],
    };
    if (!isAnonymous) saveToLocalStorage();
    return newChatId;
  };
  const addMessageToChat = (id: string, message: MessageInterface) => {
    const currentChat = chats[id];
    if (!currentChat) return;
    currentChat.messages.push({
      id: crypto.randomUUID(),
      ...message,
    });
    if (!currentChat.isAnonymous) saveToLocalStorage();
  };

  return { chats, hasChats, createNewChat, addMessageToChat };
});
