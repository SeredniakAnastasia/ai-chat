<template>
  <v-dialog max-width="500" v-model="isActive">
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        variant="outlined"
        append-icon="mdi-plus"
        text="Add chat"
      ></v-btn>
    </template>

    <template #default="{ isActive }">
      <v-card title="NEW CHAT">
        <v-card-text> Enter name for new chat </v-card-text>

        <v-card-item>
          <add-chat-form @onClose="closeModal" />
        </v-card-item>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close Dialog" @click="closeModal"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
  import type { Ref } from 'vue';
  import AddChatForm from '@/components/AddChatForm.vue';

  const isActive: Ref<boolean> = ref(false);
  const closeModal = () => (isActive.value = false);
</script>
