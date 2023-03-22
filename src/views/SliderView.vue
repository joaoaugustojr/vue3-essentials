<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

const images: Ref<Array<any>> = ref([]);

onMounted(() => {
  images.value.push({
    url: "https://source.unsplash.com/250x250?beach" as string,
    alt: "Picture from unsplash" as string,
    current: true as boolean,
  });
  images.value.push({
    url: "https://source.unsplash.com/250x250?person" as string,
    alt: "Picture from unsplash" as string,
    current: false as boolean,
  });
  images.value.push({
    url: "https://source.unsplash.com/250x250?animal" as string,
    alt: "Picture from unsplash" as string,
    current: false as boolean,
  });
  images.value.push({
    url: "https://source.unsplash.com/250x250?landescape" as string,
    alt: "Picture from unsplash" as string,
    current: false as boolean,
  });
  images.value.push({
    url: "https://source.unsplash.com/250x250?wallpaper" as string,
    alt: "Picture from unsplash" as string,
    current: false as boolean,
  });
  images.value.push({
    url: "https://source.unsplash.com/250x250?street" as string,
    alt: "Picture from unsplash" as string,
    current: false as boolean,
  });
});

const prev = () => {
  let index = images.value.findIndex((image) => image.current);
  let prevIndex = index - 1;

  // Check first element
  if (index === 0) {
    prevIndex = images.value.length - 1;
  }

  goToImage(prevIndex);
};

const next = () => {
  let index = images.value.findIndex((image) => image.current);
  let nextIndex = index + 1;

  // Check last element
  if (index === images.value.length - 1) {
    nextIndex = 0;
  }

  goToImage(nextIndex);
};

const goToImage = (id: any) => {
  const element = document.getElementById(id);

  if (!element) return;

  setCurrent(id);

  element.scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });
};

const setCurrent = (id: any) => {
  images.value.forEach((image) => {
    image.current = false;
  });

  images.value[id].current = true;
};
</script>

<template>
  <div class="container relative p-4 w-[640px] m-auto">
    <button
      class="arrow left absolute top-0 left-0 bottom-0 right-auto text-5xl w-10 text-center text-white border-none hover:bg-gradient-to-r from-gray-500 opacity-10 hover:opacity-100 transition-all duration-500"
      title="Prev"
      @click.stop="prev()"
    >
      <Icon icon="material-symbols:arrow-left" />
    </button>
    <button
      class="arrow right absolute top-0 left-auto bottom-0 right-0 text-5xl w-10 text-center text-white border-none hover:bg-gradient-to-l from-gray-500 opacity-10 hover:opacity-100 transition-all duration-500"
      title="Next"
      @click.stop="next()"
    >
      <Icon icon="material-symbols:arrow-right" />
    </button>
    <div class="gallery-wrapper overflow-x-auto snap-center no-scrollbar">
      <picture class="galerry flex flex-row flex-nowrap gap-4">
        <img
          v-for="(image, index) in images"
          :key="index"
          :id="`${index}`"
          :src="image.url"
          :alt="image.alt"
          @click.stop="goToImage(index)"
          class="item w-[250px] h-[250px] shrink-0 transition-all duration-500 ease-in-out cursor-pointer"
          :class="{ 'opacity-30': !image.current, current: image.current }"
        />
      </picture>
    </div>
  </div>
</template>

<style scoped>
</style>
