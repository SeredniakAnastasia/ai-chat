<template>
  <v-form
    ref="formRef"
    @submit.prevent="onSubmit"
    :class="horizontal ? 'd-flex align-center ga-2 w-100' : ''"
  >
    <v-text-field
      v-model="modelValue"
      :label="label"
      :class="horizontal ? 'flex-grow-1' : ''"
      hide-details="auto"
    />
    <v-btn
      type="submit"
      :disabled="!modelValue"
      :block="!horizontal"
      :class="!horizontal && 'mt-2'"
    >
      {{ buttonText }}
    </v-btn>
  </v-form>
</template>

<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue';
  import type { Ref } from 'vue';
  import type { VForm } from 'vuetify/components';

  interface BaseFormProps {
    modelValue: string;
    label: string;
    buttonText: string;
    horizontal?: boolean;
  }

  const props = defineProps<BaseFormProps>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'submit', value: string): void;
  }>();

  const modelValue: Ref<string> = ref(props.modelValue);
  const formRef: Ref<VForm> = ref();

  watch(modelValue, (val: string) => emit('update:modelValue', val));

  const onSubmit = () => {
    if (!modelValue.value) return;
    emit('submit', modelValue.value);
    modelValue.value = '';
  };
</script>
