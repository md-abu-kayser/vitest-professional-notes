<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <div class="panel">
    <header @click="isOpen = !isOpen">
      <slot name="header">
        <span>Default Header</span>
      </slot>
    </header>
    <main v-if="isOpen">
      <slot :message="'Hello from scoped slot'">
        <p>Default content</p>
      </slot>
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>
