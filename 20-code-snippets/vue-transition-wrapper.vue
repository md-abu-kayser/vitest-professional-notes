<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);
</script>

<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <Transition name="fade">
      <div v-if="show" class="box">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
