<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue: string;
  label?: string;
}

const props = withDefaults(defineProps<Props>(), { label: "Label" });
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const localValue = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<template>
  <label>
    {{ label }}
    <input v-model="localValue" type="text" />
  </label>
</template>
