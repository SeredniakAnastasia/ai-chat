<template>
  <v-snackbar v-model="toastVisible" timeout="3000">
    {{ toastMessage }}
  </v-snackbar>
</template>

<script lang="ts" setup>
  import { useUiStore } from '@/stores/uiStore';

  const ui = useUiStore();
  const { toastMessage, toastVisible } = storeToRefs(ui);
</script>
