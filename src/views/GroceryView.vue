<script setup lang="ts">
import { groceryStore } from "@/stores/grocery";
import { Icon } from "@iconify/vue";

const store = groceryStore();
</script>

<template>
  <div class="flex justify-center items-center flex-col bg-gray-300 p-4">
    <h1 class="text-xl">Grocery List</h1>
    <button
      class="flex flex-shrink-0 items-center justify-center bg-green-500 text-white py-1 px-4 m-2 rounded-md hover:bg-green-600 font-bold transition-all"
      @click="store.create()"
      title="Create new item"
    >
      <span>New Item</span>
      <Icon icon="humbleicons:plus" />
    </button>
  </div>
  <div class="flex flex-col justify-center items-center">
    <div
      class="flex justify-center items-center"
      v-for="item in store.items"
      :key="item.id"
    >
      {{ item }}

      <div class="flex">
        <button
          class="flex flex-shrink-0 items-center justify-center bg-red-500 text-white py-1 px-4 m-2 rounded-md hover:bg-red-600 font-bold transition-all"
          @click="store.delete(item.id)"
          title="Remove item"
        >
          <span>Remove</span>
          <Icon icon="humbleicons:trash" />
        </button>

        <button
          class="flex flex-shrink-0 items-center justify-center bg-green-500 text-white py-1 px-4 m-2 rounded-md hover:bg-green-600 font-bold transition-all"
          @click="store.update(item.id)"
          title="Update item"
        >
          <span>Update</span>
          <Icon icon="humbleicons:refresh" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
