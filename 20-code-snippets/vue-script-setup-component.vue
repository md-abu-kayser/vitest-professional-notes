<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  title: string;
  count?: number;
}

const props = withDefaults(defineProps<Props>(), { count: 0 });
const emit = defineEmits<{
  (e: "update:count", value: number): void;
  (e: "submit"): void;
}>();

const localCount = ref(props.count);
const doubleCount = computed(() => localCount.value * 2);

function increment() {
  localCount.value++;
  emit("update:count", localCount.value);
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p data-testid="count">Count: {{ localCount }}</p>
    <p>Double: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
    <button @click="emit('submit')">Submit</button>
  </div>
</template>
