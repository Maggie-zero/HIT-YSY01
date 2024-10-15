<template>
  <div class="h-full w-full p-2">
    <component
      :src="state.src"
      ref="frame"
      :is="MyVideo"
      class="rounded-sm shadow-md"
    />
  </div>
</template>

<script setup lang="ts">
import { MyVideo } from "@/component";
const state = reactive({
  src: {
    src: "/stream/live/pi.m3u8",
    type: "application/x-mpegURL",
  } as any,
});

onMounted(() => {
  nextTick(() => {});
});
onBeforeUnmount(() => {});
</script>

<style scoped lang="scss"></style>
