<template>
  <v-app-bar>
    <v-container fluid>
      <div class="d-flex justify-space-between align-center w-full">
        <div class="d-flex align-center ga-4">
          <v-btn v-if="mobile" @click="toggleNav" icon="mdi-menu"></v-btn>
          <add-chat-block />
        </div>
        <div class="d-flex align-center ga-4">
          <v-btn @click="theme.toggle()" :icon="themeIcon"></v-btn>
          <h1 class="d-none d-md-block text-h5">
            Chat with <span class="font-weight-bold font-italic">Stacy</span>
          </h1>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
  import { useDisplay, useTheme } from 'vuetify';
  import { useUiStore } from '@/stores/uiStore';

  const theme = useTheme();
  const { toggleNav } = useUiStore();
  const { mobile } = useDisplay();

  const themeIcon = computed<string>(() =>
    theme.global.name.value === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'
  );
</script>
