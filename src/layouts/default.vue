<template>
  <app-header />
  <v-main>
    <sidebar v-if="hasChats" />
    <router-view />
    <toast />
  </v-main>
</template>

<script lang="ts" setup>
  import AppHeader from '@/components/AppHeader.vue';
  import Sidebar from '@/components/Sidebar.vue';
  import { useChatStore } from '@/stores/app';

  const chatStore = useChatStore();
  const { hasChats } = storeToRefs(chatStore);
</script>
