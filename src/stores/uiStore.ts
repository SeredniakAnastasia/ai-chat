import { defineStore } from 'pinia';
import type { Ref } from 'vue';
import { useDisplay } from 'vuetify';

export const useUiStore = defineStore('ui', () => {
  const { mobile } = useDisplay();
  const isNavOpen: Ref<boolean> = ref(!mobile.value);

  const toastMessage: Ref<string> = ref('');
  const toastVisible: Ref<boolean> = ref(false);

  const openToast = (msg: string): void => {
    toastMessage.value = msg;
    toastVisible.value = true;
  };

  const toggleNav = () => (isNavOpen.value = !isNavOpen.value);

  return { isNavOpen, toggleNav, toastMessage, toastVisible, openToast };
});
