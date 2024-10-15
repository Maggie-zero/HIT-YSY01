<template>
  <div class="h-full w-full">
    <video
      ref="videoPlayer"
      class="video-js w-full h-full"
    ></video>
  </div>
</template>

<script setup lang="ts">
import videojs from "video.js";
import "video.js/dist/video-js.css";

const props = defineProps<{
  src: object;
}>();

let timer: any;
const videoPlayer = ref();
let myPlayer: any = {};

const chooseSource = (val: any) => {
  myPlayer.src(val);
  setTimeout(() => {
    myPlayer.play();
  }, 500);
};
const videoInit = () => {
  myPlayer = videojs(
    videoPlayer.value,
    {
      controls: true,
      sources: [props.src],
      controlBar: {
        children: [
          { name: "progressControl" },
          { name: "liveDisplay" },
          { name: "volumePanel" },
        ],
      },
      muted: true,
      autoplay: true,
      language: "zh-CN",
      inactivityTimeout: 0,
      // poster: "./pic/videopre.jpg",
      preload: true,
    },
    () => {
      // myPlayer.on("loadeddata", function () {
      //   timer = setTimeout(() => {
      //     // myPlayer && myPlayer.play();
      //   }, 150);
      // });
      myPlayer.on("error", function () {
        console.log("加载错误");
      });
    }
  );
};
defineExpose({ chooseSource });
onMounted(() => {
  nextTick(() => {
    videoInit();
  });
});
onBeforeUnmount(() => {
  if (myPlayer) {
    myPlayer.dispose();
  }
  clearTimeout(timer);
});
</script>

<style scoped lang="scss"></style>
