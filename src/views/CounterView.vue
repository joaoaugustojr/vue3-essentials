
<script setup lang="ts">
import { counterStore } from "@/stores/counter";
import { Icon } from "@iconify/vue";

const store = counterStore();
</script>

<template>
  <p class="text-gray-600 text-center mt-4">{{ store.toString }}</p>
  <div class="flex items-center justify-center">
    <button
      class="flex items-center bg-green-500 text-white py-1 px-4 m-2 rounded-md hover:bg-green-600"
      @click="store.increment()"
    >
      Increment <Icon icon="humbleicons:plus" />
    </button>
    <button
      class="flex items-center bg-red-500 text-white py-1 px-4 m-2 rounded-md hover:bg-red-600"
      @click="store.decrement()"
    >
      Decrement <Icon icon="humbleicons:minus" />
    </button>
  </div>
</template>

<style scoped></style>
