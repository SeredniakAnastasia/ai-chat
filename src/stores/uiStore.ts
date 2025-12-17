import { defineStore } from 'pinia';
import type { Ref } from 'vue';
import { useDisplay } from 'vuetify';

export const useUiStore = defineStore('ui', () => {
  const { mobile } = useDisplay();
  const isNavOpen: Ref<boolean> = ref(!mobile.value);

  const toggleNav = () => (isNavOpen.value = !isNavOpen.value);

  return { isNavOpen, toggleNav };
});
