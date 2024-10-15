<template>
  <div
    class="h-10 w-10 opacity-5 hover:opacity-100 flex justify-center items-center z-10 cursor-pointer"
    @click="statefull"
  >
    <el-tooltip
      effect="light"
      content="全屏"
      placement="top-start"
      v-if="State.main_fill"
      ><el-icon :size="30"> <DataBoard /> </el-icon
    ></el-tooltip>
    <el-tooltip
      effect="light"
      content="返回"
      placement="top-start"
      v-if="!State.main_fill"
    >
      <el-icon :size="30"> <Monitor /> </el-icon
    ></el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { useStateStore } from "@/store/useStateStore";
const State = useStateStore();

const statefull = () => {
  State.main_fill = !State.main_fill;
};
</script>

<style scoped lang="scss"></style>
