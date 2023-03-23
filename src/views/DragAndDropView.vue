<script setup lang="ts">
const boards = [
  {
    title: "Todo",
    items: [
      {
        title: "Please subscribe!",
        status: "",
      },
    ],
  },
  {
    title: "In progress",
    items: [
      {
        title: "Do that task",
        status: "",
      },
      {
        title: "Do that task 2",
        status: "",
      },
      {
        title: "Do that task 3",
        status: "",
      },
    ],
  },
  {
    title: "Done",
    items: [
      {
        title: "Another one",
        status: "",
      },
    ],
  },
];

const removeDropzoneHighlight = () => {
  const dropzones = document.querySelectorAll(".dropzone");

  dropzones.forEach((dropzone) => {
    dropzone.classList.remove("highlight");
  });
};

const dragstart = ($event: any) => {
  const element = $event.target;

  if (element.classList.contains("card")) {
    element.classList.add("dragging");
  }
};

const drag = ($event: any) => {};

const dragend = ($event: any) => {
  const element = $event.target;

  removeDropzoneHighlight();

  element.classList.remove("dragging");
};

const dragenter = ($event: any) => {
  const element = $event.target;

  if (element.classList.contains("dropzone")) {
    element.classList.add("highlight");
  }
};

const dragover = ($event: any) => {
  const element = $event.target;
  const cardElement = document.querySelector(".dragging");

  if (element.classList.contains("dropzone")) {
    removeDropzoneHighlight();
    element.classList.add("highlight");
    element.appendChild(cardElement);
  }

  if (element.classList.contains("card")) {
    removeDropzoneHighlight();
    element.parentElement.classList.add("highlight");
    element.parentElement.appendChild(cardElement);
  }
};

const dragleave = ($event: any) => {
  const element = $event.target;

  if (element.classList.contains("dropzone")) {
    element.classList.remove("highlight");
  }
};

const drop = ($event: any) => {};
</script>

<template>
  <div
    class="boards bg-gray-800 min-h-screen text-white flex flex-col lg:flex-row gap-4 pb-4 lg:items-start"
  >
    <div
      class="board bg-gray-700 p-4 mx-4 first:mt-4 md:my-4 rounded-xl lg:min-w-[300px] lg:min-h-[300px]"
      v-for="(board, indexBoard) in boards"
      :key="indexBoard"
    >
      <h3 class="text-orange-500 text-xl mb-4">{{ board.title }}</h3>
      <div
        class="dropzone w-full min-h-[200px] p-2 flex flex-col gap-2"
        @dragenter="dragenter"
        @dragover.prevent="dragover"
        @dragleave="dragleave"
        @drop="drop"
      >
        <div
          class="card bg-slate-600 p-4 border-b-2 border-cyan-300 cursor-pointer pointer-events-auto"
          v-for="(item, indexItem) in board.items"
          :key="indexItem"
          draggable="true"
          @dragstart="dragstart"
          @drag="drag"
          @dragend="dragend"
        >
          <span
            class="status block rounded-xl w-8 h-2 bg-orange-500 mb-1 pointer-events-none"
          ></span>
          <div class="content pointer-events-none">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.highlight {
  @apply outline-dashed outline-2 outline-green-400;
}

.dragging * {
  @apply opacity-30;
}
</style>
