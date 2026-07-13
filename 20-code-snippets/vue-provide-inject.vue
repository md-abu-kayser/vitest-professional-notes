<!-- Parent Component (Providing theme) -->
<script setup lang="ts">
import { provide, ref, readonly } from "vue";

const theme = ref<"light" | "dark">("light");
function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}

provide("theme", readonly(theme));
provide("toggleTheme", toggleTheme);
</script>

<template>
  <div :class="`theme-${theme}`">
    <slot />
    <button @click="toggleTheme">Toggle Theme</button>
  </div>
</template>
