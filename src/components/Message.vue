<template>
  <div :class="[type === MessageRoleType.USER ? 'justify-end' : 'justify-start', 'd-flex my-2']">
    <v-sheet
      class="pa-4"
      rounded="xl"
      border
      max-width="fit-content"
      :color="type === MessageRoleType.USER ? 'surface' : 'primary'"
    >
      {{ text }}
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import { MessageRoleType } from '@/types/index';

  interface MessageProps {
    type: String;
    text: String;
  }

  const props = defineProps<MessageProps>();
</script>
